import re

def is_int(var):
    while True:
        try:
            integer_value = int(var)
            return integer_value
        except ValueError:
            print("It's not a number. Please try again")
            var = input("Enter the number:\n>  ")
            
def is_valid_str(var):
    while True:
        try:
            if re.match(r'[A-Za-z]', var):               
                return var.capitalize()
        except ValueError:
            print("It's not a valid string. Please try again")
            var = input("Enter the string:\n>  ")
    
def show_user_menu():
    output = """
       Volunteers Organizations (V)
                           QUIT (Q)
    """
    print(output)
    
    
while True:
    print("\nChoose option please")
    show_user_menu()
    userinput = input("> ").lower()
    if userinput in ['v', 'q']:
        if userinput == 'v':
            # view_item()
            pass
        elif userinput == 'q':
            break
    else:
        print("\nThere is no such option\nPlease try again")