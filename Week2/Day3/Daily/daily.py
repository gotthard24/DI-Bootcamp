# #daily 1
# user_input = input("> ")
# challenge_1 = {}

# for i, char in enumerate(user_input):
#     if char not in challenge_1:
#         challenge_1[char] = [i]
#     else:
#         challenge_1[char].append(i)

# print(challenge_1)

#daily 2
import random

products = []
total_price = []
temp_list = []
wallet = random.randint(9, 30)
shop = {
    'Meat' : 6,
    'Bread' : 2,
    'Milk' : 1,
    'Potatoes' : 1,
    'Cheese' : 4,
    'Fruits' : 3,
    'Vegetables' : 2,
    'Pasta' : 1,
    'Rice' : 1
}

is_shopping = True

for key, value in shop.items():
    temp_list.append(f'{key} : {value}$\n')
    message = ''.join(temp_list)  

print(f"It's a small'Shop Game'\nYou have {wallet}$ in yor wallet\nTry to buy something\nAnd enjoy! :)\n\n")

while is_shopping:
    user_input = input("Write the name of a product you want to buy\nHelp : all options\n\n> ").capitalize()
    if user_input in shop.keys():
        total_price.append(shop[user_input])
        products.append(user_input)
        print(f'{user_input} added to your cart\n')
    if user_input == 'Cart':
        print(products)
    if user_input == 'Pay':
        if sum(total_price) <= wallet:
            print(f"You have just bought this products\n{sorted(products)}")
            print(f"You paid {sum(total_price)}$")
            wallet -= sum(total_price)
            print(f"Money left {wallet}$")
            print("Have a nice day! )")
            is_shopping = False
        else:
            print("Nothing (you can't afford it)")
    if user_input == 'Help':
        print(f"{message}\nCart - show current choices\nPay - try to buy your choices\nQuit - for exit the programm\n\n")
    if user_input == 'Quit':
        is_shopping = False