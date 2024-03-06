def check_and_count(string, char):
    count = 0
    for i in range(len(string)):
        if string[i].lower() == char.lower():
            count += 1
            
    return count
        

string = "Programming is cool!"
character = "m"

print(check_and_count(string, character))