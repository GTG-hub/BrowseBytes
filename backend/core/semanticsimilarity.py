from sentence_transformers import SentenceTransformer, util
import torch

embedder = SentenceTransformer('all-MiniLM-L6-v2')

# Corpus with example sentences
corpus = ['Trading is the buying and selling of securities, such as stocks, bonds, currencies and commodities, as opposed to investing, which suggests a buy-and-hold strategy. Trading success depends on a traders ability to be profitable over time.',
          'A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation. A stock, which is also known as equity, is a security that represents the ownership of a fraction of a corporation.',
          'Having a business name does not separate the business entity from the owner, which means that the owner of the business is responsible and liable for debts incurred by the business.',
          'I am playing cricket game',
          'I love sports',
          'I love to earn money with the help of algotrading',
          'A man is riding a white horse on an enclosed ground.',
          'A monkey is playing drums.',
          'A cheetah is running behind its prey.'
          ]
corpus_embeddings = embedder.encode(corpus, convert_to_tensor=True)
queries = ['I want earn money with the help of algotrading']

def model(corpus, query):
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
            results.append(corpus[idx])

        return results
            

results_arr = model(corpus,queries)
