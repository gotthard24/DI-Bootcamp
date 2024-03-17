import requests
import json
import re

def get_word():
    cpecs = r'[!@#$%^&*()_+{}\[\]:;<>,.?\/\\|~`]'
    numbers = r'[1234567890]'
    while True:
        cond_a = 0
        cond_c = 0
        var = input("Enter the word:\n>  ")
        
        if re.search(cpecs, var):
            print("It's not a word. Try again without special characters")
            continue
        else:
            cond_a = 1
                
        if re.search(numbers, var):
            print("It's not a word. Try again without numbers")
            continue
        else:
            cond_c = 1
            
        if cond_a + cond_c == 2:
            break
    return var  

RATING = "g"
API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
STARTER = "https://api.giphy.com/v1/gifs/search?"

print()
print("Which GIF do you want to find ?\n")
query = get_word()

response = requests.get(f"{STARTER}q={query}&rating={RATING}&api_key={API_KEY}")
print(response)


if response.status_code == 200:
    data = response.json()

    for i in range(10):
        print(f"{data["data"][i]["title"]}\n{data['data'][i]['url']}\n")
else:
    print("Query Error: ", response.status_code)