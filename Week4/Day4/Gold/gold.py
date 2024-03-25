import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '474747kk'
DATABASE = 'XPbase'
TABLENAME = 'users_gold'

is_logged_in = False

connection = psycopg2.connect(
                    host=HOSTNAME, 
                    user=USERNAME, 
                    password=PASSWORD, 
                    dbname=DATABASE)
cursor = connection.cursor()

sign_query = f"""
        INSERT INTO {TABLENAME} (username, password)
        VALUES
            (%s, %s);
        """  
login_query = f"""
            SELECT * FROM {TABLENAME}
            WHERE username = %s AND password = %s
        """
        
while is_logged_in == False:
    userinput = input("login or exit ?\n> ")
    if userinput == 'login':
        login = input("login\n> ")
        passw = input("password\n> ")
        cursor.execute(login_query, (login, passw))
        results = cursor.fetchone()
        if results == None:
            print("User not found")
            print("1 - yes\n2 - no")
            userinput = input("Do you want to sign up?\n> ")
            if userinput == '1':
                new_name = input("Enter new username\n> ")
                new_pass = input("Enter new password\n> ")
                cursor.execute(sign_query, (new_name, new_pass))
            elif userinput == '2':
                print("Bye")
                break
            else:
                print("Unavailable option")
        else:
            print("You are in!")         
    elif userinput == 'exit':
        print("Bye")
        break
    else:
        print("Unavailable option")
        
connection.commit()
connection.close()