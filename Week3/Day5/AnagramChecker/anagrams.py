import re
from anagram_checker import AnagramChecker

def get_word():
    cpecs = r'[!@#$%^&*()_+{}\[\]:;<>,.?\/\\|~`]'
    numbers = r'[1234567890]'
    while True:
        cond_a = 0
        cond_b = 0
        cond_c = 0
        var = input("Enter the word:\n>  ")
        
        if re.search(cpecs, var):
            print("It's not a word. Try again without special characters")
            continue
        else:
            cond_a = 1
        
        if " " not in var:
                cond_b = 1
        else:
            print("It's not a word. Try again without spaces")
            continue

                
        if re.search(numbers, var):
            print("It's not a word. Try again without numbers")
            continue
        else:
            cond_c = 1
            
        if cond_a + cond_b + cond_c == 3:
            break
    return var    
            
            
print("\nHi there\nthis program created to found anagrams of your word\nPlease enter any word that you want to check for anagrams\n")
word = get_word().lower()
print("Nice word!")
ac = AnagramChecker(word)
anagrams = ac.get_anagrams()
if len(anagrams) == 0:
    print(" But sorry, I have no anagrams for you")
else:
    print('Anagrams for your word: \n')
    for any in anagrams:
        print(any, end= " ")
    print()