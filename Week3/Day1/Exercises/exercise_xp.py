# # #exercise 1
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age


# def oldest_cat(*cats):
#     oldest = None
#     max_age = -1
#     for cat in cats:
#         if cat.age > max_age:
#             max_age = cat.age
#             oldest = cat
#     return oldest
    
        
# katty = Cat("Katty", 3)
# fluffy = Cat("Fluffy", 1)
# chucha = Cat("Chucha", 9)

# oldest = oldest_cat(katty, fluffy, chucha)
# print(f"The oldest cat is {oldest.name}, and she is {oldest.age} years old")

# # #exercise 2
# class Dog:
#     def __init__(self, name = "noname", height = 10):
#         self.name = name
#         self.height = height
        
#     def bark(self):
#         print(f"{self.name} goes woof!")
        
#     def jump(self, x=2):
#         print(f"{self.name} jumps {self.height * x} sm high!")
        

# davids_dog = Dog("Rex", 50)
# sarahs_dog = Dog("Teacup", 20)
# davids_dog.bark()
# davids_dog.jump()
# sarahs_dog.bark()
# sarahs_dog.jump()

# if davids_dog.height > sarahs_dog.height:
#     print(f"{davids_dog.name} is bigger")
# else:
#     print(f"{sarahs_dog.name} is bigger")

# #exercise 3
# class Song():
#     def __init__(self, lyrics):
#         self.lyrics = lyrics
    
    
#     def sing_me_a_song(seld, lyrics):
#         for item in lyrics:
#             print(item)
            
            
# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song(stairway.lyrics)

#exercise 4
class Zoo():
    def __init__(self, name):
        self.name = name
        self.animals = []


    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            
            
    def get_animals(self):
        for animal in self.animals:
            print(animal)
            
            
    def sell_animal(self, animal):
        if animal in self.animals:
            self.animals.remove(animal)
            
            
    def sort_animals(self):
        self.animals.sort()
        animal_groups = {}

        for animal in self.animals:
            first_letter = animal[0].lower()
            if first_letter not in animal_groups:
                animal_groups[first_letter] = [animal]
            else:
                animal_groups[first_letter].append(animal)
        
        return animal_groups
    
    
    def get_groups(self):
        i = 0
        animal_groups = self.sort_animals()
        for key, animals in animal_groups.items():
            i += 1
            print(f"{i}:")
            for animal in animals:
                print(animal)
            print()
            

ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Babaika")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Eagle")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Lion")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()