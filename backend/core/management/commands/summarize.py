import torch
#! pip install transformers datasets
from transformers import pipeline
from core.models import *

# article summarizer model


def article_summarizer(text: str):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    return summarizer(text, max_length=300, min_length=200, do_sample=False)
    #return summarizer(text, do_sample=False)

articles = Article.objects.all()
c=0
for i in articles:
    print(c)
    if i.summary is list:
        pass
    # print(i.summary)
    text = article_summarizer(i.summary)
    if(len(text[0]['summary_text'])>500):
        text[0]['summary_text'] = text[0]['summary_text'][:500]
    i.summary = text[0]['summary_text']
    i.save()