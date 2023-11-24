from django.core.management.base import BaseCommand
from core.models import Article,Author,Category  # Import your models
from selenium import webdriver
from selenium.webdriver.common.by import By 
from selenium.webdriver.support.ui import Select
import pandas as pd
import time

path = '/usr/bin/safaridriver'  # Replace with the actual path to safaridriver

# Specify the path to SafariDriver using Service
service = webdriver.safari.service.Service(path)
webdriver.safari.service.Service.start(service)

# Create a Safari WebDriver instance
driver = webdriver.Safari(service=service)
driver.set_window_size(1200, 800)

# Navigate to a website 
# driver.get("https://www.economist.com/business?utm_medium=cpc.adword.pd&utm_source=google&utm_campaign=a.io_apac_content&utm_content=conversion.content.anonymous.apac_in_en_content-boosting_na_content_google_subs_dsa_other_content-hub_na&gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTei4Q7M7CrmI9cos1AE7UWvYZgVkoOhBOXvsur6WtxYrFLpmp_j3BEaAp-YEALw_wcB")

# article = driver.find_element(By.TAG_NAME,'article')

# text = article.find_element(By.TAG_NAME,'p').text
# print(page)




class Command(BaseCommand):
    help = 'Your custom script description'

    def handle(self, *args, **options):
        # Your script logic goes here
        cat =  Category.objects.get(pk = 5)
        print(cat)
        articles = Article.objects.filter(CategoryID = cat)
        
        for article in articles:
            article_link = article.Link_article
            article_page = driver.get(article_link)
            article_page = driver.find_element(By.XPATH,'//*[@id="content-body-67480425"]')
            article_body = article_page.find_elements(By.XPATH,"./p")
            for i in article_page:
                print(i.text())

        for article in articles:
            self.stdout.write(self.style.SUCCESS(f'Article: {article.Link_article}'))