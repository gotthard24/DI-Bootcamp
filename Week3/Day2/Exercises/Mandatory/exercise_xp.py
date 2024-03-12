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

# #exercise 4
class Family():
    def __init__(self, last_name, members = []):
        self.members = members
        self.last_name = last_name
        
    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congrats with a new family member!")
        
    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
            else:
                raise ValueError("No such name in a list")
        
    
    def family_presentation(self):
        print(f"{self.last_name} family: ")
        for member in range(len(self.members)):
            print(self.members[member])
        
        
# kovalenko = Family("Kovalenko",[
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ])

# kovalenko.born(name="Daniel", age=0, gender='Male', is_child=True)
# print(kovalenko.is_18("Daniel"))
# kovalenko.family_presentation()

#exercise 5
class TheIncredibles(Family):     
    def use_power(self, name):
        if self.is_18(name) == True:
            pass
        else:
            raise AttributeError(f"{name} is under 18")
        for member in range(len(self.members)):
            if name == self.members[member]['name']:
                print(self.members[member]['power'])
                
    def incredible_presentation(self):
        print("*Here is our powerful family *")
        super().family_presentation()
        # self.family_presentation()
        
incredibles = TheIncredibles('TheIncredibles', [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ])

incredibles.incredible_presentation()
incredibles.born(name="Jack", age=0, gender='Male', is_child=True, power="Unknown Power", incredible_name="Baby Jack")
incredibles.incredible_presentation()