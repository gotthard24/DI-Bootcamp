# #1
# from datetime import datetime

# def can_retire(gender, date_of_birth):
#     retirement_age_male = 67
#     retirement_age_female = 62
#     age = get_age(date_of_birth)
    
#     if age >= retirement_age_male and gender == "Male":
#         return True
#     elif age >= retirement_age_female and gender == "Female":
#         return True
#     else:
#         return False
    

# def get_age(date_of_birth):
#     birthdate = datetime.strptime(date_of_birth, "%Y/%m/%d")
#     current_date = datetime.now()
#     age = current_date.year - birthdate.year
    
#     return age
    
# def is_int(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")    
            
            
# print(can_retire("Male", "1997/10/09"))

# #2
# def is_int(var):
#     while True:
#         try:
#             integer_value = int(var)
#             return integer_value
#         except ValueError:
#             print("It's not a number. Please try again")
#             var = input("Enter the number: ")
            
            
# def sum_sum(int_1, multiplier = 4):
#     string = str(int_1)
#     summ = 0
#     # int_2 = int(string * 2)
#     # int_3 = int(string * 3)
#     # int_4 = int(string * 4)
#     for i in range(multiplier):
#         summ += int(string * (i+1))
#     # summ = int_1 + int_2 + int_3 + int_4
        
#     return summ


# number = sum_sum(3)
# print(number)

#3
import random

def throw_dice():
    return random.randint(1,6)


def throw_until_doubles():
    double = [0, 1]
    count = 0
    
    while double[0] != double[1]:
        count += 1
        double[0] = throw_dice()
        double[1] = throw_dice()        
        
    return count


def main(doubles_ammount):
    count_list = []
    throws = []
    for i in range(doubles_ammount - 1):
        count_list.append(throw_until_doubles())
        
    return count_list    

total_list = main(100)
total_number = sum(total_list)     
average = round(total_number / len(total_list), 2)
print(total_number)
print(average)