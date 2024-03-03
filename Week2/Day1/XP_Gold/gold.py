#1
# print("Hello World\n" * 4 + "I love python\n" * 4)

#2
def getint(var):
    while True:
        try:
            integer_value = int(var)
            if integer_value > 0 and integer_value <= 12:
                return integer_value
        except ValueError:
            print("Incorrect input. Please try again")
            var = input("Enter the month number: ")
            
month = getint("Enter the month number: ")

if month == 12 or month == 1  or month == 2:
    print("Winter")
if month == 3 or month == 4  or month == 5:
    print("Spring")
if month == 6 or month == 7  or month == 8:
    print("Summer")
if month == 9 or month == 10  or month == 11:
    print("Autumn")