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

# Query sentences:
queries = ['I want earn money with the help of algotrading', 'I love sports', 'business']


# Find the closest 5 sentences of the corpus for each query sentence based on cosine similarity
top_k = min(5, len(corpus))
for query in queries:
    query_embedding = embedder.encode(query, convert_to_tensor=True)

    # We use cosine-similarity and torch.topk to find the highest 5 scores
    cos_scores = util.cos_sim(query_embedding, corpus_embeddings)[0]
    top_results = torch.topk(cos_scores, k=top_k)

    print("\n\n======================\n\n")
    print("Query:", query)
    print("\nTop 5 most similar sentences in corpus:")

    for score, idx in zip(top_results[0], top_results[1]):
        print(corpus[idx], "(Score: {:.4f})".format(score))

    """
    # Alternatively, we can also use util.semantic_search to perform cosine similarty + topk
    hits = util.semantic_search(query_embedding, corpus_embeddings, top_k=5)
    hits = hits[0]      #Get the hits for the first query
    for hit in hits:
        print(corpus[hit['corpus_id']], "(Score: {:.4f})".format(hit['score']))
    """