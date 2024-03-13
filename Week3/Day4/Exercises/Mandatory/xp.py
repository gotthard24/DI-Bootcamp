# #exercise 1
# from random import randint
# from dk import is_int
# import os

# class SentGenerator():
#     def __init__(self, path):
#         self.path = path
#         self.words = self.get_words_from_file()
    
#     def main(self):
#         print("\nHere you can generate a random sentence\nPlease input a number FROM 2 TO 20\nFor length of sentence")
#         while True:
#             userinput = is_int(input("Enter the number:\n> "))
#             if  2 <= userinput <= 20:
#                 random_sentence = self.get_random_sentence(userinput)
#                 return random_sentence
#             else:
#                 raise ValueError("Number is out of borders... closing")

#     def get_words_from_file(self):
#         with open(self.path, 'r') as file:
#             words = file.read().split('\n')
#         return words

#     def get_random_sentence(self, length):
#         random_sentence = []
#         for i in range(length):
#             random_sentence.append(self.words[randint(0,len(self.words))].lower())
#         return random_sentence

# dir_path = os.path.dirname(os.path.realpath(__file__))       
# sowpods = dir_path + "/sowpods.txt"

# sent_gen = SentGenerator(sowpods)
# random_sentence = sent_gen.main()
# print(random_sentence)

# #exercise 2
# import json

# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""

# name = "sample.json"

# data = json.loads(sampleJson)
# print(data["company"]["employee"]["payable"]["salary"])

# data["company"]["employee"].update({"birth_date": "01.01.1990"})
# print(data["company"]["employee"])

# with open(name, 'w') as file_obj:
#     json.dump(data, file_obj, indent=2)