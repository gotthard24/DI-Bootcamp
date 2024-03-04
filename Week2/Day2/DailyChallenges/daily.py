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
final_list = [""]

for letter in user_input:
    if letter != final_list[-1]:
        final_list.append(letter)
        
final_string = final_string.join(final_list)
    
print(f"'{final_string}'")