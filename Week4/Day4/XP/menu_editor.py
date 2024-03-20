import re
from menu_item import MenuItem
from menu_manager import MenuManager

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
                return var
        except ValueError:
            print("It's not a valid string. Please try again")
            var = input("Enter the string:\n>  ")
    
def show_user_menu():
    output = """
       View an Item (V)
        Add an Item (A)
     Delete an Item (D)
     Update an Item (U)
      Show the Menu (S)
               QUIT (Q)
    """
    print(output)
    
def add_item_to_menu():   
    name = is_valid_str(input("Enter name of the dish\n> "))
    price = input("Enter price of the dish\n> ")
    item = MenuItem(name, price)
    item.save()
    print("Item Added Successfully")
    
def remove_item_from_menu():
    name = is_valid_str(input("Enter name of the dish\n> "))
    item = MenuManager.get_by_name(name)
    if item == None:
        print("Item not found")
    else:
        item.delete()
        print("Item Deleted Successfully")
        
def update_item_from_menu():
    output = """
     Name (1)
    Price (2)
     Both (3)       
    """
    while True:
        print("\nWhat do you want to update")
        print(output)
        userinput = input("> ").lower()
        if userinput in ['1', '2', '3']:
            name = is_valid_str(input("Enter name of the dish to update\n> "))
            item = MenuManager.get_by_name(name)
            if item == None:
                    print("Item not found")
                    break
            elif userinput == '1':                
                new_name = is_valid_str(input("Enter new name for the dish\n> "))
                item.update(new_name)
                print("Item Updated Successfully")
                break
            elif userinput == '2':
                new_price = is_int(input("Enter new price for the dish\n> "))
                item = MenuManager.get_by_name(name)
                item.update(price = new_price)
                print("Item Updated Successfully")
                break
            elif userinput == '3':
                new_name = is_valid_str(input("Enter new name for the dish\n> "))
                new_price = is_int(input("Enter new price for the dish\n> "))
                item.update(new_name, new_price)
                print("Item Updated Successfully")
                break
            
def show_all():
    list = MenuManager.get_all()
    print("MENU\n")
    for i in range(len(list)):
        item_id, name, price = list[i]
        print(f'{name} is for {price}$')
            
    
def view_item():
    item_name = is_valid_str(input("Enter name of the dish\n> "))
    print(MenuManager.get_by_name(item_name))
    
    
while True:
    print("\nChoose option please")
    show_user_menu()
    userinput = input("> ").lower()
    if userinput in ['v', 'a', 'd', 'u', 's', 'q']:
        if userinput == 'v':
            view_item()
        elif userinput == 'a':
            add_item_to_menu()
        elif userinput == 'd':
            remove_item_from_menu()
        elif userinput == 'u':
            update_item_from_menu()
        elif userinput == 's':
            show_all()
        elif userinput == 'q':
            break
    else:
        print("\nThere is no such option\nPlease try again")