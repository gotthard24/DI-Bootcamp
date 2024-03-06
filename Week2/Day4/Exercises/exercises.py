people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

filtered = filter(lambda item: len(item) <= 4, people)
hello = map(lambda item: f"Hello {item}", filtered)
hello_list = list(hello)
for name in hello_list:
    print(name)

# print(hello_list)