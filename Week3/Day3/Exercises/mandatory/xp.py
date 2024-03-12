# # exercise 1
# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
    
#     def __str__(self):
#         print(f"{self.amount} {self.currency}s")
#         return f"{self.amount} {self.currency}s"
    
#     def __int__(self):
#         print(self.amount)
#         return self.amount
    
#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise ValueError("Cannot add between Currency type <dollar> and <shekel>")
#             self.amount += other.amount 
#         elif isinstance(other, (int, float)):
#             self.amount += other
#         return self
    
#     def __repr__(self):
#         return str(self)
    
#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise ValueError("Cannot add between Currency type <dollar> and <shekel>")
#             print(self.amount + other.amount)
#             return self.amount + other.amount
#         elif isinstance(other, (int, float)):
#             print(self.amount + other)
#             return self.amount + other
        
        
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# str(c1)
# int(c1)
# repr(c1)
# c1 + 5
# c1 + c2
# print(c1)
# c1 += 5
# print(c1)
# c1 += c2
# print(c1)
# c1 + c3

# #exercise 2
# from func import add as i_love_when_naming_is_short_and_readable

# i_love_when_naming_is_short_and_readable(1, 2)

# #exercise 3
# from random import randint

# class Ex():
#     def __init__(self, lenght):
#         self.lenght = lenght
        
#     def __str__(self):
#         string = ''
#         alphabet_lower = [chr(ord('a') + i) for i in range(26)]
#         alphabet_upper = [chr(ord('A') + i) for i in range(26)]
        
#         alphabet = alphabet_lower + alphabet_upper
#         for i in range(self.lenght):
#             string += alphabet[randint(0,52)]
#         return string

# e1 = Ex(5)
# print(str(e1))

# #exercise 4
# from datetime import datetime

# current_date = datetime.now()

# print(current_date)

# #exercise 5
# from datetime import datetime

# goal_date = datetime(datetime.now().year + 1, 1, 1) #2024 + 1, 1 month, 1 day
# current_date = datetime.now()
# goal_time = goal_date - current_date
# print("the 1st of January is in", goal_time)

# # #exercise 6
# from datetime import datetime

# def minutes_on_earth(date):
#     return date.total_seconds() // 60

# birthdate = datetime(1997,10,9,10,11,12)
# current_date = datetime.now()
# goal = current_date - birthdate
# print(minutes_on_earth(goal), " minutes you already lived")

# #exercise 7
# from faker import Faker
# import random

# def fill_with_dict(list, num):
#     faker = Faker()
#     languages = ['ru','en','fr','ge','he']
#     for i in range(num):
#         fake_name = faker.name()
#         fake_address = faker.address()
#         language = random.choice(languages)
#         list.append({'name' : fake_name, "adress" : fake_address, 'language' : language})
    
# users = []
# fill_with_dict(users, 5)

# for user in users:
#     print(user)

