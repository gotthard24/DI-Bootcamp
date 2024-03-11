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

#exercise 2
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        
    def bark(self):
        pass
    
    def run_speed(self):
        pass
    
    def fight(self):
        pass