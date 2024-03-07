def swap(is_x):
    if is_x == True:
        is_x = False
    else:
        is_x = True    
    return is_x 


def is_int(var):
    while True:
        try:
            integer_value = int(var)
            return integer_value
        except ValueError:
            print("It's not a number. Please try again")
            var = input("Enter the number: ")
 
 
def bubble_sort(some_list):           
    for i in range(len(some_list) - 1): # 4 iterations
        minimum = i # 0
        for j in range( i + 1, len(some_list)): # from 1 to 5 for the 1 iteration
            if(some_list[j] < some_list[minimum]): # if 24 < 2
                minimum = j # it's not
                if(minimum != i): # but it is
                    some_list[i], some_list[minimum] = some_list[minimum], some_list[i] #swap ...
    return some_list #... so it's a sorting algo