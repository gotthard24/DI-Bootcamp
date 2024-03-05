x = int(input('Enter the Number: ')) 

li = []

for i in range(1, x):
    if x % i == 0:
        li.append(i)
        
if x == sum(li):
    print("True")
else:
    print("False")

#same but with list comprehensions
li = [i for i in range(1, x) if x % i == 0]  
print ('True' if x==sum(li) else 'False')