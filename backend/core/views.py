from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from core.serializers import *
from django.contrib.auth import authenticate
from core.renderers import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
# from core.semanticsimilarity import results_arr
from sentence_transformers import SentenceTransformer, util
import torch
from core.models import *
from django.views.decorators.csrf import csrf_protect
import json
import numpy
# from core.views import query


            # article_info["Author_email"] = article.ArticleID.email
            # category = article.CategoryId
            # article_info["Category"] = category.c_name

embedder = SentenceTransformer('all-MiniLM-L6-v2')
# Corpus with example sentences

def model(corpus, queries,top_k):
    corpus_embeddings = embedder.encode(corpus, convert_to_tensor=True)
    top_k = len(corpus)
    for query in queries:
        query_embedding = embedder.encode(query, convert_to_tensor=True)
        cos_scores = util.cos_sim(query_embedding, corpus_embeddings)[0]
        top_results = torch.topk(cos_scores, k=top_k)
        # print(top_results)
        results = []
        for score, idx in zip(top_results[0], top_results[1]):
            print(corpus[idx], "(Score: {:.4f})".format(score))
            results.append(idx+1)

        return results

article_titles=[]
#Generating token manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

# Create your views here.
class UserRegistrationView(APIView):
    renderer_classes =[UserRenderer]
    def post(self, request, format = None):
        serializer = UserRegistrationSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token':token,'msg':"hello"}, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
class UserLoginView(APIView):
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email, password = password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token':token,"email":email},status = status.HTTP_200_OK)
            else:
                return Response({"error":{"non_field_errors":["Email or password is not valid"]}}, status = status.HTTP_404_NOT_FOUND)
        
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes =[IsAuthenticated]
    def get(self,request, format= None):
        print(request.user)
        serializer = UserProfileSerializer(request.user)
        print(serializer.data)
        email = serializer.data["email"]
        name = serializer.data["name"]
        user = User.objects.get(email = email)
        article_interaction = user_article_interaction.objects.filter(UserID=user)
        data = {
                "name" :name,
                "email": email,
                "article":{}
                }
        dataDict={}
        print(len(article_interaction))
        for i,art_interact in enumerate(article_interaction):
            print(i)
            articleInfo = {"article_info":{},"article_interaction_status":""}
            articleInfo["article_interaction_status"] = art_interact.InteractionID
            article = art_interact.ArticleID
            article_info = {}
            article_info["ArticleID"] = article.ArticleID
            article_info["title"] = article.title
            article_info["summary"] = article.summary
            article_info["Author"] = article.AuthorID.a_name
            article_info["Link_article"] = article.Link_article
            articleInfo["article_info"] = article_info
            string = i
            print(i)
            print(string)
            dataDict[string] = articleInfo
            
        # json_object = json.dumps(data, indent = 4)
        # print(json.loads(json_object))
        # print(serializer_dict.data)
        data["article"] =dataDict
        print(data)
        return Response(data, status = status.HTTP_200_OK)

class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes =[IsAuthenticated]
    def post(self, request, format = None):
        serializer = UserChangePasswordSerializer(data = request.data, context ={'user':request.user})
        if serializer.is_valid(raise_exception = True):
            return Response({"msg":"Password changed successfully"}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class SendResetPwEmailView(APIView):
    renderer_classes =[UserRenderer]
    def post(self, request, format = None):
        serializer = SendResetPwEmailSerializ(data = request.data)
        
        if serializer.is_valid(raise_exception = True):
            print(serializer.data)
            return Response({"msg":"Password reset mail sent successfully."}, status = status.HTTP_200_OK)
        return Response(serilaizer.errors, status = status.HTTP_400_BAD_REQUEST)


class UserPasswordResetView(APIView):
    renderer_classes= [UserRenderer]
    def post(self,request,uid, token,format =None):
        serializer = UserPasswordResetSerializer(data = request.data, context={'uid':uid, 'token':token})
        if serializer.is_valid(raise_exception = True):
            print("yeeh")
            return Response({"msg":'Password Reset Successfully'}, status = status.HTTP_200_OK)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


res = ''
class searchView(APIView):
    # @csrf_protect
    def post(self,request,id):
        print(request.body)
        print(id)
        # print(request.GET.get('query'))
        # query = request.GET.get('query')
        res = id
        # print(query)
        corpus =[]
        dict={}
        for i in Article.objects.all():
            dict[i.title] = i.ArticleID
            corpus.append(i.title)

        top_k = len(corpus)

        queries = []
        queries.append(res)
        output=[]
        results_arr = model(corpus,queries,top_k)
        li=[]
        for i in results_arr:
            i = i.numpy()
            print(i)
            li.append(Article.objects.get(pk=int(i)+54))
            output = [{"title":output.title, "Link":output.Link_article, "Article_id":output.ArticleID,"author":Article.objects.get(ArticleID=output.ArticleID).AuthorID.a_name, "summary":output.summary}for output in li]
        print(output)
        return Response(output, status=status.HTTP_200_OK)
    

class addArticleView(APIView):
    def post(self, request):
        data = request.data
        print(data)
        # print(request.body)
        interaction_id = data["Interaction_id"]
        Article_id = data["Article_id"]
        User_id = data["User_id"]
        article = Article.objects.get(ArticleID = Article_id)
        user = User.objects.get(email = User_id)
        user_article_interaction.objects.create(InteractionID = interaction_id, ArticleID = article, UserID = user)
        return Response({"msg":"done"}, status = status.HTTP_200_OK)

class ArticleView(APIView):
    def get(self,request,id):
        article = Article.objects.get(ArticleID = id)
        serializer = ArticleSerializer(article)
        return Response(serializer.data,status=status.HTTP_200_OK)
        

