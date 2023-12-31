from rest_framework import serializers
from core.models import *
from xml.dom import ValidationErr
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from core.utils import *
class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type' :'password'}, write_only = True)
    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'password2']
        extra_kwargs={
            'password':{'write_only':True}
        }

    #VALIDATING PASSWORD AND CONFIRM PASSWORD
    def validate(self,attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        if password !=password2:
            raise serializers.ValidationError("Password and confirm password don't match")
        return super().validate(attrs)
    
    def create(self, validate_data):
        return User.objects.create_user(**validate_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length = 255)
    class Meta:
        model = User
        fields = ["email","password"]

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','email','name']

class Dict(object):
    def __init__(self, dictionary):
        self.dict = dictionary

class DictSerializer(serializers.Serializer):
    data = serializers.DictField(child = serializers.CharField())

class UserChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length = 255, style = {'input_type' :'password'}, write_only = True)
    password2 = serializers.CharField(max_length = 255, style = {'input_type' :'password'}, write_only = True)
    class Meta:
        model = User
        fields = ['password', 'password2']
    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')
        user = self.context.get('user')
        if password !=password2:
            raise serializers.ValidationError("Password and confirm password don't match")
        user.set_password(password)
        user.save()
        return super().validate(attrs)

class SendResetPwEmailSerializ(serializers.Serializer):
    email = serializers.EmailField(max_length = 255)
    class Meta:
        fields =['email']
    def validate(self, attrs):
        email = attrs.get('email')
        print(email)
        if User.objects.filter(email=email).exists():
            user = User.objects.get(email = email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            print("Encoded UID", uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print('Password Reset Token', token)
            link = 'http://127.0.0.1:3000/api/user/resetpw/'+uid+'/'+token
            print('Password Reset Link', link )
            body ='Click on the following link to reset your password' + link
            data = {
                'subject' :"Reset your password",
                'body':body,
                'to_email':user.email
            }
            Util.send_email(data)
            return super().validate(attrs)
        else:
            raise ValidationErr('You are not a registered user')


class UserPasswordResetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length = 255, style = {'input_type' :'password'}, write_only = True)
    password2 = serializers.CharField(max_length = 255, style = {'input_type' :'password'}, write_only = True)
    class Meta:
        model = User
        fields = ['password', 'password2']
    def validate(self, attrs):
        try:
            password = attrs.get('password')
            password2 = attrs.get('password2')
            uid= self.context.get('uid')
            token = self.context.get('token')

            if password !=password2:
                raise serializers.ValidationError("Password and confirm password don't match")
            id = smart_str(urlsafe_base64_decode(uid))
            user = User.objects.get(id = id)


            if not PasswordResetTokenGenerator().check_token(user, token):
                raise ValidationErr('Token is not valid or expired')
            user.set_password(password)
            user.save()
            return super().validate(attrs)
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user,token)
            raise ValidationErr("Token is not valid or expired")

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['AuthorID','a_name','email']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['CategoryID','c_name']

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['ArticleID','title','summary','AuthorID','CategoryID','Link_article']

class searchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = searchHistory
        fields = ['HistoryID','UserID','query']

class user_article_interaction(serializers.ModelSerializer):
    class Meta:
        model = user_article_interaction
        fields = ['InteractionID','UserID','ArticleID']

class article_author(serializers.ModelSerializer):
    class Meta:
        model = article_author
        fields = ['ArticleID','AuthorID']

class query_serializer(serializers.Serializer):
    query = serializers.CharField()

