import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728
ammount = 0

for i in range(len(list_of_numbers)):
    if list_of_numbers[i] <= 3728:
        anti_number = list_of_numbers[i] - target_number
        if abs(anti_number) in list_of_numbers:
            ammount += 1
# print(sorted(list_of_numbers))
print(ammount // 2)