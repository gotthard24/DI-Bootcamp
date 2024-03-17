from pyowm.owm import OWM
from datetime import datetime, timezone
import json
import dk

API_KEY = '91162d31c7f79579eac79dda7e69099d'
owm = OWM(API_KEY)
weather_mgr = owm.weather_manager()
# reg = owm.city_id_registry()

with open("Week3\Day5\WeatherApp\city.list.json", "r", encoding="utf-8") as file:
    id_list = json.load(file)
    
user_input = dk.is_int(input("Please enter ID:\n\nLondon - 1006984\nMoscow - 524894\nTel-Aviv - 293396\n> "))

for i in range(len(id_list)):
    if id_list[i]['id'] == user_input:
        city = id_list[i]['name']
        country = id_list[i]['country']
        city_id = f"{city},{country}"
        break

observation = weather_mgr.weather_at_place(city_id)
weather = observation.weather

print(city_id)
print()
print(f"Current weather at {city}:{country}:")
print("Status:", weather.detailed_status)
print("Temperature:", weather.temperature('celsius')['temp'], "°C")

wind_speed = weather.wind()['speed']
print("Wind speed:", wind_speed, "m/s")

sunrise_time = datetime.fromtimestamp(weather.sunrise_time(), timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
sunset_time = datetime.fromtimestamp(weather.sunset_time(), timezone.utc).strftime('%Y-%m-%d %H:%M:%S')
print("Sunrise time:", sunrise_time)
print("Sunset time:", sunset_time)