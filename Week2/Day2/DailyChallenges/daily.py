# #challenge 1
# def getint(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")
            
# user_number = getint(input("Enter your number: "))
# user_length = getint(input("Enter your length: "))
# result_list = []

# for iteration in range(user_length):
#     result_list.append(user_number * (iteration + 1))
    
# for number in result_list:
#     print(number)

#challenge 2
final_string = ''
user_input = input("> ")
temp_list = list(user_input)
final_list = []

# for iteration in range(len(temp_list)):
#     if temp_list[iteration] not in temp_list:
#         final_list.append(temp_list[iteration])
#         print(final_list)

for item in temp_list:
    if item not in final_list:
        final_list.append(item)
        
final_string = final_string.join(final_list)
    
print(final_string)