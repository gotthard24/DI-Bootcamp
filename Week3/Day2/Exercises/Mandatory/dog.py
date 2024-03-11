from random import randint

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        
    def bark(self):
        print(f'{self.name} is barking')
    
    def run_speed(self):
        speed = self.weight / self.age * 10
        return speed
    
    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            winner = self
        elif self.run_speed() * self.weight < other_dog.run_speed() * other_dog.weight:
            winner = other_dog
        else:
            winner = None
        return f"{winner.name} won the fight"
    
    
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False
              
    def train(self):
        self.bark()
        self.trained = True
        
    def play(self, *dogs):
        dog_names = [dog.name for dog in dogs]
        for name in dog_names:
            print(name, end=", ")
        print("all play together")         
        
    def do_a_trick(self):
        tricks = ["does a barrel roll", 'stands on his back legs', 'shakes your hand', 'plays dead'] 
        trick = randint(0, len(tricks))   
        print(f"{self.name} {tricks[trick]}")