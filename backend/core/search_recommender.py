# pip install -U sentence-transformers
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

model = SentenceTransformer("sentence-transformers/all-mpnet-base-v2")

# titles of all 40 articles
sentences = ["I am idiot", "Each sentence is converted", "Hello this", "I have converted misha"]
list_articles = ["Idiot", "I", "Misha", "Converted"]

query = ""
for title in list_articles:
    query += title


def recommender_search(sentences: list, query: str):
    final_list = []
    embeddings = model.encode(sentences)
    dict = {}

    query_embedding = model.encode([query])
    similarities = cosine_similarity(query_embedding, embeddings)

    my_list = similarities[0].tolist()

    for i in range(len(my_list)):
        dict[my_list[i]] = i
    my_list = sorted(my_list, reverse=True)

    for element in my_list:
        final_list.append(sentences[dict[element]])

    return final_list[: 3]


print(recommender_search(sentences, query))
