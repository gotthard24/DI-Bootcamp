class Farm():
    def __init__(self, name):
        self.name = name
        self.animals = {}
        
    
    def add_animal(self, name, amount=1):
        if name in self.animals:
            self.animals[name] += amount
        else:
            self.animals[name] = amount
                
                
    def get_info(self):
        print(f"{self.name}s Farm")
        print()
        for key, value in self.animals.items():
            print(f"{key} : {value}")
        print()
        print("     E-I-E-I-O!")
        
        
    def get_animal_types(self):
        types = []
        for key in self.animals.keys():
            types.append(key)
            
        return sorted(types)
    
    
    def get_short_info(self):
        types = self.get_animal_types()
        print(f"{self.name}'s farm has ", end="")
        for i in range(len(types)):
            if((i+1) == len(types)):
                print("", end="and ")
            print(types[i], end="s ")
        
      
      
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info() 
macdonald.get_short_info()