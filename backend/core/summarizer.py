import torch
#! pip install transformers datasets
from transformers import pipeline


def article_summarizer(text: str):
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    return summarizer(text, max_length=1000, min_length=130, do_sample=False)
