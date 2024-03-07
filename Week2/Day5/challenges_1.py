#Exercise 1
# # first pattern
def draw_tree(size):
    for i in range(size):
        print()
        hor_size = 1 + i * 2
        for j in range(size - i):
            print(" ", end="")
        for j in range(hor_size):
            print("*", end="")
            
draw_tree(9)

# # second pattern
# def draw_tree(size):
#     for i in range(size):       
#         for j in range(size - (i + 1)):
#             print(" ", end="")
#         print("*" * (i + 1))
                    
# draw_tree(5)

# # third pattern
# def draw_tree(size):
#     for i in range(size): 
#         print("*" * (i + 1), end="")   
#         print()   
#     for i in range(size):
#         print(" " * i, end="")
#         for j in range(size - i):
#             print("*", end="")
#         print()
                    
# draw_tree(25)

# #Exercise 2
# my_list = [2, 24, 12, 354, 233] # len 5
# for i in range(len(my_list) - 1): # 4 iterations
#     minimum = i # 0
#     for j in range( i + 1, len(my_list)): # from 1 to 5 for the 1 iteration
#         if(my_list[j] < my_list[minimum]): # if 24 < 2
#             minimum = j # it's not
#             if(minimum != i): # but it is
#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i] #swap ...
# print(my_list) #... so it's a sorting algo