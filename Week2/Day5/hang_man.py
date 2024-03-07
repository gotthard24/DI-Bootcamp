import random

def is_char(char):
    alphabet = [chr(ord('a') + i) for i in range(26)]
    
    while len(char) > 1 or char.lower() not in alphabet:
        if char.lower() == "quit":
            return "quit"
        
        char = input("It's not a char, try again: \n> ")
    else:
        return char
    
    
def main_word(word, inputs):
    output = ''
    counter = 0
    for i in range(len(word)):
        if word[i] in inputs:
            output += word[i]
        else:
            output += "_"
            counter += 1
            
    if counter == 0:
        return "You win !!!"
            
    return output
    
    
wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)
inputs = []

print(word)
print(main_word(word, inputs))

while True:
    
    user_input = is_char(input("\nGuess the letter: \n> ")).lower()
    inputs.append(user_input)
    
    if user_input == "quit":
        break
    
    if main_word(word, inputs) == "You win !!!":
        print(main_word(word, inputs))
        break
    else:
        print(main_word(word, inputs))