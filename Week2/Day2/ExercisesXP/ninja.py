# #1
# import math

# def getint(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")     
               
            
# # Q = math.sqrt((2 * C * D)/H)
# C = 50
# H = 30
# D = 1

# user_input = input("Write comma-separated string of numbers: \n> ")
# numbers_list = user_input.split(",")

# for i in range(len(numbers_list)):
#     D = getint(numbers_list[i])
#     Q = math.sqrt((2 * C * D)/H)
#     print(round(Q))

# #2
# def square(number):
#     number = number * number
#     return number


# numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
# print("Task 1") 
# print("Task 2") 
# print(numbers) 
# print(sorted(numbers[::-1]))
# print(sum(numbers))

# print("Task 3") 
# task_three = [numbers[0], numbers[-1]]
# print(task_three)

# print("Task 4") 
# task_four=[]
# for number in numbers:
#     if number > 50:
#         task_four.append(number)

# print(task_four)

# print("Task 5") 
# task_five=[]
# for number in numbers:
#     if number < 10:
#         task_five.append(number)

# print(task_five)

# print("Task 6") 
# task_six = list(map(square,numbers))
# print(task_six)

# print("Task 7") 
# task_seven = set(numbers.copy())
# print(task_seven)
# print(len(task_seven))

# print("Task 8") 
# task_eight = (sum(numbers)) / (len(numbers))
# print(task_eight)

# print("Task 9") 
# print(max(numbers))

# print("Task 10") 
# print(min(numbers))

# #3
# lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# print('Lorem Ipsum')
# print(f'There are {len(lorem)} chars')

# sentences = lorem.split(".")
# print(f'There are {len(sentences)} sentences')

# words = lorem.split(" ")
# print(f'There are {len(words)} words')

# unique_words = []
# for word in words:
#     if word not in unique_words:
#         unique_words.append(word)

# print(f'There are {len(unique_words)} unique words')

# #4
# user_input = input("> ")
# input_words_list = user_input.split(" ")
# frequency_dict = {}

# for word in input_words_list:
#     if word not in frequency_dict.keys():
#         frequency_dict.update({word: 1})
#     else:
#         frequency_dict[word] += 1
        
# print(frequency_dict)