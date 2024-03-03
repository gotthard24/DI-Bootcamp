#4
# my_text = """Lorem ipsum dolor sit amet, 
# consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
# et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
# laboris nisi ut aiquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
# in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
# cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."""
# count = 0

# for char in my_text:
#     count += 1
    
# print(count)

# only_letters = my_text.replace(" ", "")

# print(len(only_letters))

#5
user_input = input("Enter longest sentence without A you can do: ").lower()
last_input = ""

while "a" not in user_input and len(user_input) > len(last_input):
    last_input = user_input
    print("Good Job")
    if user_input == "exit":
        break
    user_input = input("Enter even longest: ").lower()       