user_input = input("> ")
words = user_input.split(" ")
reversed_words = reversed(words.copy())
print(list(reversed_words))