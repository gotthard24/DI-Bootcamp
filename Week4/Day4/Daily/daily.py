import psycopg2
import requests
import json
import random

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = '474747kk'
DATABASE = 'DailyBase'
TABLENAME = 'countries'

connection = psycopg2.connect(
                host=HOSTNAME, 
                user=USERNAME, 
                password=PASSWORD, 
                dbname=DATABASE)
cursor = connection.cursor()
query = f"""
        INSERT INTO {TABLENAME} (name, capital, flag, subregion, population)
        VALUES
            (%s, %s, %s, %s, %s);
        """ 


response = requests.get('https://restcountries.com/v3.1/all')
data = response.json()
formatted_data = json.dumps(data, indent=4)
# print(formatted_data)

for i in range(10):
    rand_int = random.randint(1, 100)
    name = data[rand_int]['name']['official']
    capital = data[rand_int]['capital'][0]
    flag = data[rand_int]['flags']['png']
    subregion = data[rand_int]['subregion']
    population = data[rand_int]['population']
    # print(f"name - {name}, capital - {capital}, flag - {flag}, subregion - {subregion}, population - {population}")
    cursor.execute(query, (name, capital, flag, subregion, population))
    connection.commit()
    
connection.close()