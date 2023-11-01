from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
model = SentenceTransformer("sentence-transformers/all-mpnet-base-v2")

sentences = ["I am idiot", "Each sentence is converted"]
query = "This is converted"


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

    return final_list


print(recommender_search(sentences, query))
