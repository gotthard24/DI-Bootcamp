import requests
import json

q = "hilarious"
rating = "g"
api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
starter = "https://api.giphy.com/v1/gifs/search?"
response = requests.get(f"{starter}q={q}&rating={rating}&api_key={api_key}")
print(response)

if response.status_code == 200:
    data = response.json()

    for dict in data["data"]:
        keys_to_remove = []
        for key in dict.keys():
            if key != "url" and key != "images":
                keys_to_remove.append(key)
        for key in keys_to_remove:
            dict.pop(key)
    
    for i in range(len(data["data"])):
        keys_to_remove = []
        for values in data["data"][i]["images"].values():
            keys_to_remove = []
            for key,value in values.items():
                if key != "height" and key != "url":
                    keys_to_remove.append(key)
                if key == "height" and int(value) < 100:
                    keys_to_remove.append(key)
            for key in keys_to_remove:
                values.pop(key)
                             
    # with open("Week3\Day4\Exercises\Gold\giphy_i100.json", "w") as file:
    #     json.dump(data, file, indent=2)
    
    with open("Week3\Day4\Exercises\Gold\giphy_i100.json", "r") as file:
        new_data = json.load(file)
    
    print(len(new_data["data"]))
    
    for i in range(10):
        print(json.dumps(new_data["data"][i], indent=2))
    
else:
    print("Query Error: ", response.status_code)