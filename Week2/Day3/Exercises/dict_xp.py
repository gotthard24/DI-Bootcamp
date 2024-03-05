# #exercise 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# my_dict = zip(keys, values)

# print(list(my_dict))

# #exercise 2
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

# #exercise 3
# brand = {
#     'name': 'Zara',
#     'creation_date': 1975,
#     'creator_name': 'Amancio Ortega Gaona',
#     'type_of_clothes': ['men', 'women', 'children', 'home'],
#     'international_competitors': ['Gap', 'H&M','Benetton'],
#     'number_stores': 7000,
#     'major_color':{
#         'France': 'blue', 
#         'Spain': 'red', 
#         'US': ['pink', 'green']
#     }    
# }

# brand['number_stores'] = 2
# print(brand['number_stores'])
# print(f"{brand['name']}'s clients are {brand['type_of_clothes'][0]}, {brand['type_of_clothes'][1]} and {brand['type_of_clothes'][2]}")
# brand.update({'country_creation':'Spain'})
# print(brand['country_creation'])
# if 'international_competitors' in brand:
#     brand['international_competitors'].append('Desigual')   
# print(brand['international_competitors'])
# del brand['creation_date']
# brand['international_competitors'].pop()
# print(brand['international_competitors'])
# print(brand['major_color']['US'])
# print(len(brand.keys()))
# print(brand.keys())
# more_on_zara = {'creation_date': 1975, 'number_stores': 10000}
# print(more_on_zara)

# #exercise 4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}
disney_users_C = {}
for i in range(len(users)):
    disney_users_A.update({users[i] : i}) 
    
print(disney_users_A)

for i in range(len(users)):
    disney_users_B.update({i : users[i]}) 
    
print(disney_users_B)

# sorted_users = sorted(users)
# for i in range(len(sorted_users)):
#     disney_users_C[sorted_users[i]] = i
    
disney_users_C = {user: i for i, user in enumerate(sorted(users))}

print(type(disney_users_C))
print(disney_users_C)


print('4.1')
for key, value in disney_users_A.items():
    if "i" in key:
        print(key, ":", value, end=", ")

print('\n4.2')
for key, value in disney_users_A.items():
    if key[0].lower() == 'm' or key[0].lower() == 'p':
        print(key, ":", value, end=", ")