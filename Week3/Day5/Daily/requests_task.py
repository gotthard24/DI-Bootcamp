import requests
import time

start_time = time.time()
response = requests.get("https://api.duckduckgo.com/?q=google&format=json")
print(response)
end_time = time.time()
print("Time taken:", end_time - start_time, "seconds")