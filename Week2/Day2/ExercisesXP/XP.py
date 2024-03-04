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
# def getint(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")

# pegi = 16
# is_permitted = False
            
# baby_age = 3
# children_age = 12            
# baby_price = 0
# children_price = 10
# adult_price = 15
# total_cost = 0
# kid_list = []
# members_ages = []
# members = {}

# members_ammount = getint(input("Please enter ammount of members "))

# for member in range(members_ammount):
#     user_name = input(f"Please enter the name of {member + 1} member: ")
#     user_age = getint(input(f"Please enter age of {member + 1} member: "))
#     members_ages.append(user_age)
#     members.update({user_name : user_age})
    
# for age in members_ages:
#     if age > pegi:
#         is_permitted = True
        
# if not is_permitted:
#     for name in members.keys():
#         kid_list.append(name)
#     print(f"{kid_list} Sorry guys you need some adult to see this movie ... ")
    
# if is_permitted:
#     for member in range(members_ammount):
#         if members_ages[member] < baby_age:
#             total_cost += baby_price
#         elif members_ages[member] >= 3 and members_ages[member] <= children_age:
#             total_cost += children_price
#         else:
#             total_cost += adult_price
#     print(f"Total price is: {total_cost}")

#exercise10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
                   "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
finished_sandwiches = []
index = 0

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)


for item in finished_sandwiches:
    print(f'I made your {item}')
    
        
# for index in range(len(sandwich_orders)):
#     finished_sandwiches.append(sandwich_orders[index])
#     sandwich_orders.pop()

    
# while len(sandwich_orders) != 0:
#     finished_sandwiches.append(sandwich_orders[index])
#     sandwich_orders.pop(0)
#     index += 1
#     print()
