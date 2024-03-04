def getint(var):
    while True:
        try:
            integer_value = int(var)
            return integer_value
        except ValueError:
            print("It's not a number. Please try again")
            var = input("Enter the number: ")


inches = getint(input("Enter the number: "))
coef = 2.54
height = inches * coef
requirement = 145

if height > requirement:
    print(f"You are tall enough to ride, your height is {height} sm")
else:
    print(f"You are not tall enough, your height is {height} sm")
    
    