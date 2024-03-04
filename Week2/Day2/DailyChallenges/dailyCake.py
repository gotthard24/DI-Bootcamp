from datetime import datetime

userinput = input("Write your birthday in a format DD/MM/YYYY: \n> ")

birthdate = datetime.strptime(userinput, "%d/%m/%Y")
current_date = datetime.now()
age = current_date.year() - birthdate.year()
print(age)
print(type(age))