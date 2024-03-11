# #exercise 1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age = 1):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# ben = Bengal("Ben") 
# charles = Chartreux("Charles")
# simon = Siamese("Simon")   
# all_cats = [ben, charles, simon]
# sara_pets = Pets(all_cats)
# sara_pets.walk()

# #exercise 2
# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight
        
#     def bark(self):
#         print(f'{self.name} is barking')
    
#     def run_speed(self):
#         speed = self.weight / self.age * 10
#         return speed
    
#     def fight(self, other_dog):
#         if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
#             winner = self
#         elif self.run_speed() * self.weight < other_dog.run_speed() * other_dog.weight:
#             winner = other_dog
#         else:
#             winner = None
#         return f"{winner.name} won the fight"
    
    
# jija = Dog("Jija", 3 , 5)
# biba = Dog("Biba", 5 , 15)
# boba = Dog("Boba", 9 , 25)

# jija.bark()
# biba.bark()
# boba.bark()

# print(jija.fight(biba))
# print(jija.fight(boba))
# print(biba.fight(boba))

# #exercise 3
# import dog

# jija = dog.PetDog("Jija", 3 , 5)

# jija.do_a_trick()