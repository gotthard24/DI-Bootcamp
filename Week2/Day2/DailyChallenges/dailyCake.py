from datetime import datetime

userinput = input("Write your birthday in a format DD/MM/YYYY: \n> ")

birthdate = datetime.strptime(userinput, "%d/%m/%Y")
current_date = datetime.now()
age = current_date.year - birthdate.year
# candles_ammount = age % 10

cake = [
    [' ',' ',' ',' ','_','_','_','_','_','_',' ',' ',' ',' '],
    [' ',' ',' ','|','H','A','P','P','Y',' ','|',' ',' ',' '],
    [' ','_','_','|','_','_','_','_','_','_','|','_','_',' '],
    ['|','^','^','^','^','^','^','^','^','^','^','^','^','|'],
    ['|',' ',' ','B','I','R','T','H','D','A','Y',' ',' ','|'],
    ['|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|'],
    ['~','~','~','~','~','~','~','~','~','~','~','~','~','~'],
    ]

for index in range(age):
    cake[0].insert(7, "i")
     
for index in range(age // 2):        
    cake[1].insert(4, " ")
if age % 2 != 0:
    cake[1].insert(4, " ") 
for index in range(age // 2):
    cake[1].insert(-5, " ")
    
for index in range(age):
    cake[2].insert(5, "_")
    
for index in range(age):
    cake[3].insert(2, "^")
    
for index in range(age // 2):
    cake[4].insert(2, " ")
if age % 2 != 0:
    cake[4].insert(2, " ")
for index in range(age // 2):
    cake[4].insert(-2, " ")

for index in range(age):
    cake[5].insert(2, " ")  
    
for index in range(age):
    cake[6].insert(2, "~")  
    
for row in cake:
    print("\n")
    for item in row:
        print(item, end="")