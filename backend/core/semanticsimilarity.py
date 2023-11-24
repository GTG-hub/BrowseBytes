from sentence_transformers import SentenceTransformer, util
import torch
# from core.models import Article
# from core.views import query



embedder = SentenceTransformer('all-MiniLM-L6-v2')
# Corpus with example sentences
corpus_embeddings = embedder.encode(corpus, convert_to_tensor=True)
corpus =[]
dict={}
for i in Article.objects.all():
    dict[i.title] = i.ArticleID
    corpus.append(i.title)

queries = []
queries.append(query["query"])
top_k = len(corpus)
def model(corpus, query,top_k):
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


results_arr = model(corpus,queries,top_k)