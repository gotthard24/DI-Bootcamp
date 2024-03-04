#exercise 1
# my_fav_numbers = set([24,47])
# my_fav_numbers.add(97)
# my_fav_numbers.add(55)
# print(my_fav_numbers)
# my_fav_numbers_list = list(my_fav_numbers)
# my_fav_numbers_list.pop()
# print(my_fav_numbers_list)
# friend_fav_numbers = set([13,7,47])
# our_fav_numbers = friend_fav_numbers.union(set(my_fav_numbers_list))
# print(our_fav_numbers)

#exercise2
#impossible, tuples are immutable

#exercise3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# basket.count("Apples")
# basket.clear()
# print(basket)

#exercise4
# floats are number with floating point, so there are plenty of floats between any two integers
# float_list = []
# my_range = 10
# my_number = 0.5
# number = 0.5

# for item in range(my_range):
#     float_list.append(number)
#     number += my_number

# print(float_list)

#exercise5
# for number in range(1, 21):
#     print(number)
    
# for number in range(2, 21, 2):
#     print(number)

#exercise6
# my_name = "Daniel"
# user_input = input("Try guess my name: ")

# while user_input != my_name:
#     user_input = input("Try again: \n> ")

#exercise7
# user_input = input("Write your fruits separated with space: ")
# users_fruits = user_input.split(" ")
# print(users_fruits)

# user_choice = input("Write any fruit you like: ")
# if user_choice in users_fruits:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy")

#exercise8
# print("\nWelcome to our Pizza House\nstandard pizza costs 10$ + 2,5$ each topping\n")
# user_input = input("Which toppings do you prefer ?    (help for options)\n> ")
# toppings = ["cheese", "pepperoni", "mushrooms", "onion"]
# user_order = []
# index = 1
# bill = 10

# while True:
#     if user_input in toppings:
#         user_order.append(user_input)
#         bill += 2.5
#         print("Cool, something else ?\n")
#     if user_input == "help":
#         print("Our toppings: ")
#         for topping in toppings:
#             print(f'{index}: {topping}')
#             index += 1
#         print("'quit' to end the order\n")
#     if user_input == "quit":
#         print(f"Thank you for an order,{bill} dollars please")
#         break
#     if user_input != "help" and user_input not in toppings:
#         print("There is no such an option (use 'help' for options)\n")
    
#     index = 1
#     user_input = input("> ")

#exercise9
def getint(var):
    while True:
        try:
            integer_value = int(var)
            return integer_value
        except ValueError:
            print("It's not a number. Please try again")
            var = input("Enter the number: ")
            
            
baby_price = 0
children_price = 10
adult_price = 15
total_cost = 0

user_input = getint("Please enter ammount of family members ")

for member in user_input:
    user_input = getint("Please enter age ")