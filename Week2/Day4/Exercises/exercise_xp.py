# #exercise 1
# def display_message():       
#     print("I am learning Python")
    
# display_message()

# #exercise 2
# def favorite_book(title):
#     print(f"One of my favorite books is {title}")
    
# favorite_book("Lord of The Rings")

# #exercise 3
# def describe_city(city, country = "Russia"):
#     print(f"{city} is in {country}")
    
# describe_city("Tynda")

# #exercise 4
# import random

# def change_number(number):
#     try:
#         if 0 <= number <=100:
#             new_number = random.randint(1, 100)
#             if new_number == number:
#                 print("Win")
#             else:
#                 print(f"pity ... {number}, {new_number}")
#         else:
#             raise ValueError("Number is not between 0 and 100")
#     except ValueError:
#         print("Number is not between 0 and 100. Try again\n")
        
# change_number(int(input("> ")))

# #exercise 5
# def make_shirt(size = "L", text = 'I love Python'):
#     print(f"The size of the shirt is {size} and the text is {text}")
    
# make_shirt("S", "V-Vendetta")
# make_shirt()
# make_shirt("M")
# make_shirt(text = "COCO")

# #exercise 6
# def show_magicians(mages):
#     for mage in mages:
#         print(mage)
        

# def make_great(mages):
#     title = " the Great"
#     for i in range(len(mages)):
#         mages[i] += title
            
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# make_great(magician_names)
# show_magicians(magician_names)

# #exercise 7
# import random

# def getint(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")
            
            
# def get_random_temp(month):
#     while month > 12 or month < 1:
#         month = getint(input("\nNo such a month\n> "))
    
#     if 1 <= month <= 2 or month == 12:
#         temp = round(random.uniform(-10, 0), 2)
        
#     if 3 <= month <= 5:
#         temp = round(random.uniform(0, 20), 2)
        
#     if 6 <= month <= 8:
#         temp = round(random.uniform(20, 40), 2)
        
#     if 9 <= month <= 11:
#         temp = round(random.uniform(0, 20), 2)
        
#     return temp


# def main():
#     temp = get_random_temp(getint(input("Which month is it ? (number) ")))
#     print(f'The temperature right now is {temp} degrees Celsius.')
#     if temp < 0:
#         print("Brrr, that's freezing! Wear some extra layers today")
#     elif temp < 16:
#         print("Quite chilly! Don't forget your coat")
#     elif temp <= 23:
#         print("It's okey")
#     elif temp < 32:
#         print("Kinda hot")
#     elif temp <= 40:
#         print("WELCOME TO HELL!")
    
    
# main()

#exercise 8
# def questions(data):
#     score = 0
#     max_score = len(data)
    
#     for dict in data:
#         print(dict["question"])
#         print()
#         answer = input("> ")
#         if answer.lower() == dict["answer"].lower():
#             score += 1
#             print("Right answer\n")
#         else:
#             print("Wrong answer")
#             print(f"Right answer is {dict["answer"]}\n")
            
#     vars = [score, max_score]        
#     return vars  

           
# def quiz():
#     score_and_max = questions(data)
#     score = score_and_max[0]
#     max_score = score_and_max[1]
#     print(f"You have answered {score} questions right from {max_score}")
    
    
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]

# quiz()