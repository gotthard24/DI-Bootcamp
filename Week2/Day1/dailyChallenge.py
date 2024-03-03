import random

result=""
shuffled=""
char_list = []
user_input = input()

if len(user_input) < 10:
    print("string not long enough")
elif len(user_input) > 10:
    print("string is too long")
elif len(user_input) == 10:
    print("perfect string")

print(user_input[0], user_input[-1])

for char in user_input:
    result += char
    char_list.append(char)
    print(result)

random.shuffle(char_list)
shuffled = shuffled.join(char_list)
print(shuffled)