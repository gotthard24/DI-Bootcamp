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
words_ammount = 7
words = []
count = 0

while count < words_ammount:
    word = input("> ")
    words.append(word)
    count += 1
    
print(words)