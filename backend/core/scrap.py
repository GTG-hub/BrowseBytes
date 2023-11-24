from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_driver_path = "C:\Program Files (x86)\chromedriver.exe"


chrome_options = Options()
service = webdriver.chrome.service.Service(executable_path=chrome_driver_path)
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get("https://www.google.co.in/")