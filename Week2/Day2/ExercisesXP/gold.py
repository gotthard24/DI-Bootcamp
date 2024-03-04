# #1
# first_list = [1, 2, 3]
# second_list = [4, 5, 6]

# final_list = first_list.copy()
# final_list.extend(second_list)
# print(final_list)

#2
# for number in range(1500, 2501):
#     if number % 5 == 0 or number % 7 == 0:
#         print(number)

#3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# user_name = input("> ")

# if user_name in names:
#     print(names.index(user_name))

#4
# def getint(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")
            

# numbers_list = []            
# count = 0

# while count < 3:
#     user_input = getint(input("> "))
#     numbers_list.append(user_input)
#     count += 1
    
# numbers_list = sorted(numbers_list)
# print(numbers_list[-1])

#5
# english_alphabet = 'abcdefghijklmnopqrstuvwxyz'
# vowels = ['a', 'e', 'i', 'o', 'u']

# for char in english_alphabet:
#     if char in vowels:
#         print(f'{char} is a vowel')
#     else:
#         print(f'{char} is a consonant')

#6         
# words_ammount = 7
# words = []
# count = 0

# while count < words_ammount:
#     word = input("Enter your word: ")
#     words.append(word)
#     count += 1

# letter = input("Enter your letter: ") 

# for word in words:
#     if letter in word:
#         print(word.index(letter))
#     else:
#         print(f"There is no letter {letter} in {word}")

#7
# numbers = list(range(1, 1000001))
# total_sum = (len(numbers) * (numbers[0] + numbers[-1])) // 2

# print(min(numbers))
# print(max(numbers))
# print(total_sum)

#8
# user_input = input("Write a sequence of numbers separated by comma: ")
# numbers_list = user_input.split(",")
# numbers_tuple = tuple(numbers_list.copy())

# print(numbers_list)
# print(numbers_tuple)

#9
import random

print("I made a number from 0 to 9. Try to guess\n> ")
number = random.randint(0, 9)
user_input = ''
total_counts = 0

while True:
    user_input = input("> ")
    if user_input == str(number):
        total_counts += 1
        print("Winner!")
        break
    elif user_input == "quit":
        break
    else:
        print("Try again\n")
        total_counts += 1

print (f'Total tries: {total_counts}')