import random

userInput=""
result=""

userInput = input()

for char in userInput:
    result += char
    
    print(random.shuffle(result))