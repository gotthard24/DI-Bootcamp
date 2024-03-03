def getint(var):
    while True:
        try:
            integer_value = int(var)
            return integer_value
        except ValueError:
            print("It's not a number. Please try again")
            var = input("Enter the number: ")

number = getint(input("Give me a number "))
number_list = []

if (number % 3 == 0):
    number_list.append("Fizz")
else:
    number_list.append("")
    
if (number % 5 == 0):
    number_list.append("Buzz")
else:
    number_list.append("")

print(number_list[0] + number_list[1])