# #1
# def challenge(string):
#     words = sorted(string.split(","))
#     final_str = ','.join([word for word in words])
#     return final_str

# user_str = "without,hello,bag,world"
# print(challenge(user_str))

#2
def longest_word(string):
    words = string.split(" ")
    word = words[0]
    for i in range(len(words)):
        if i > 0 and len(words[i]) > len(words[i - 1]) and len(words[i]) > len(words[0]):
            word = words[i]
            
    return word


print(longest_word("Forgetfulness is by all means powerless!"))