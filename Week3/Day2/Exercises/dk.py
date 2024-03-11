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

def is_pos_int(var):
    while is_int(var) < 0:
        print("It's not positive integer")
        var = input("Enter again: ")
    return var


def is_pos(var):
    if is_int(var) < 0:
            raise Exception("Negative number")
        
            
 
def bubble_sort(arr):          
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
             
    return arr