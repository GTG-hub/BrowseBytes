from django.core.management.base import BaseCommand
from core.models import Article,Author,Category  # Import your models
from selenium import webdriver
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options
import pandas as pd
import time

path = "C:\Program Files (x86)\chromedriver.exe"
# Specify the path to SafariDriver using Service


# Create a Safari WebDriver instance
chrome_options = Options()
service = webdriver.chrome.service.Service(executable_path=path)
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.set_window_size(1200, 800)

# Navigate to a website 
driver.get("https://paperswithcode.com")

# article = driver.find_element(By.TAG_NAME,'article')

# text = article.find_element(By.TAG_NAME,'p').text
# print(page)




class Command(BaseCommand):
    help = 'Your custom script description'

    def handle(self, *args, **options):
        # Your script logic goes here
        articles = Article.objects.all()
        category = Category.objects.get(pk = 3)
        pages = driver.find_element(By.CLASS_NAME,'infinite-container')
        pages = pages.find_elements(By.CLASS_NAME,'paper-card')
        length = len(pages)
        for i in range(length):
            print(i)
            paper_link = pages[i].find_element(By.XPATH,'./div/div/div/h1/a').get_attribute("href")
            driver.get(paper_link)
            paper_title_div = driver.find_element(By.CLASS_NAME,"paper-title")
            paper_title = paper_title_div.find_element(By.XPATH,"./div/div/h1").text
            paper_author = paper_title_div.find_element(By.XPATH,"./div/div/div/p/span/a").text
            paper_abstract = driver.find_element(By.CLASS_NAME,"paper-abstract")
            summary = paper_abstract.find_element(By.XPATH,"./div/div/p").text
            summary_final = summary
            if(len(summary) >1000):
                summary_final = summary[:1000]
            email_div = driver.find_element(By.CLASS_NAME,"paper-impl-cell")
            email = email_div.find_element(By.XPATH,"./a").get_attribute("href")
            author = Author.objects.get_or_create(a_name= paper_author,email=email)
            print(author[0])
            article = Article.objects.create(title = paper_title,AuthorID=author[0],CategoryID=category,Link_article = paper_link,summary=summary_final)
            print(article.title)
            print(article.AuthorID)
            print(article.CategoryID)
            print(article.Link_article)
            print(article.summary)
            driver.get("https://paperswithcode.com")
            pages = driver.find_element(By.CLASS_NAME,'infinite-container')
            pages = pages.find_elements(By.CLASS_NAME,'paper-card')
        
        

        # for article in articles:
        #     self.stdout.write(self.style.SUCCESS(f'Article: {article.Link_article}'))