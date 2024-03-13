# import re

# string = "at what time?"
# match = re.search('at',string)
# if (match):
#     print("String found at: " , match.start())
# else:
#     print("String not found!")

# import re

# string = "at what time?"
# match = re.sub("\s","!!!",string)
# print (match)

# f = open('C:\\Users\\User1\\DI-Folders\\DI-Bootcamp\\Week3\\Day4\\Exercises\\secrets.txt', 'r')
# file_name = 'Week3\Day4\Exercises\secrets.txt'

# f = open(file_name, 'w+')
# f.write('This is a new line')
# f.close()

# f = open(file_name, 'r')
# secret_data = f.read()
# print(secret_data)
# f.close()

# f = open(file_name, "a+")
# f.write('\nThis is text being appended to test.txt')
# f.write('\nAnd another line here.')
# for line in open(file_name, "r"):
#     print(line)

import json

# my_family = {
#     "parents":['Beth', 'Jerry'],
#     "children":['Summer', 'Morty']
# }

# with open(json_file, 'w') as file_obj:
#     json.dump(my_family, file_obj, indent=4, sort_keys=True)

# json_format = json.dumps(my_family)
# print(json_format)

json_file = "Week3\Day4\Exercises\my_file.json"

with open(json_file, 'r') as file_obj:
    family = json.load(file_obj)

print(type(family["children"]))
print(family["children"])

print(f"{family["firstName"]} {family["lastName"]}'s children: ")
for item in family["children"]:
    item.update({"favorite_color": "White"})
    print(item["firstName"], item["age"])
    
print(family["children"])

with open(json_file, 'w') as file_obj:
    json.dump(family, file_obj, indent=2)