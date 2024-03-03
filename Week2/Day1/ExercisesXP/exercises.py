#exercise 1
# hello = "Hello world"
# ammount = 4
# for action in range(ammount):
#     print(hello)
    
# if loops are forbidden
# print(hello)
# print(hello)
# print(hello)
# print(hello)

#exercise 2
# print((99**3)*8)

#exercise 3
# >>> 5 < 3
# result = False
# # >>> 3 == 3
# result = True
# # >>> 3 == "3"
# result = False
# # >>> "3" > 3
# result = "Error"
# # >>> "Hello" == "hello"
# result = False

#exercise 4
# computer_brand = "Asus"
# print(f"I have a/an {computer_brand} computer")

#exercise 5
# name = "Daniel"
# age = 26
# shoe_size = 40
# info = f"My name is {name}, i am {age} years old and i wear {shoe_size} size of shoes"

# print(info)

#exercise 6
# a = int(input())
# b = int(input())
# hello = "Hello World"

# if a > b:
#     print(hello)

#exercise 7
# number = int(input("Try if your number is even: "))
# is_even = False

# if number % 2 == 0:
#     is_even = True
    
# print(is_even)

#exercise 8
# user_name = input()
# name = "Daniel"

# if user_name.lower() == name.lower():
#     print("Hi Mate! :)")
    
# else:
#     print("You SHALL NOT PASS!")

#exercise 9
# def getint(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")

# inches = getint(input("Enter the number: "))
# coef = 2.54
# height = inches * coef
# requirement = 145

# if height > requirement:
#     print(f"You are tall enough to ride, your height is {height} sm")
# else:
#     print(f"You are not tall enough, your height is {height} sm")