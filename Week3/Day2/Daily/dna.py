from random import randint

class Gene():
    def __init__(self):
        self.value = randint(0,1)
        
    def flip(self):
        a = 0
        b = 1
        if self.value == a:
            self.value = b
        else:
            self.value = a
        return self
            
            
class Chromosome():
    def __init__(self):
        self.length = 10
        self.genes = [Gene() for i in range(self.length)]
        
    def show(self):
        print('Chromosome')
        for gen in self.genes:
            print(gen.value, end=",")
        print()
        
    def mutate(self):
        for i in range(randint(0,self.length)):
            self.genes[randint(0,self.length - 1)].flip()
        # print('Chromosome mutated')
        return self

        
class DNA():
    def __init__(self):
        self.length = 10
        self.chromes = [Chromosome() for i in range(self.length)]
        
    def show(self):
        print('DNA')
        for chrome in self.chromes:
            chrome.show()
        print()
        
    def mutate(self):
        for i in range(randint(0,self.length)):
            self.chromes[randint(0,self.length - 1)].mutate()
        print('DNA mutated')
        return self


class Organism():
    def __init__(self, dna = None, environment = True): #good env - True (low mutation chance)
        self.dna = dna if dna else DNA()
        self.environment = environment
        self.mut_chance = 10 if self.environment else 75
        
    def mutate(self):
        luck_check = randint(0,100)
        if luck_check > self.mut_chance:
            print("DNA is stable")
            pass
        else:
            # print("DNA MUTATING")
            self.dna.mutate()
        return self
    
    def mutation_sequence(self):
        reference = [1 for i in range(self.dna.length)]
        counter = 0
        print(reference)
        while reference not in [[gene.value for gene in chromosome.genes] for chromosome in self.dna.chromes]:
            self.mutate()
            counter += 1
        print([[gene.value for gene in chromosome.genes] for chromosome in self.dna.chromes])
        return counter      
        
c = Chromosome()
c.show()
c.mutate()
c.show()

d = DNA()
d.show()
d.mutate()
d.show()

o = Organism(d,False)
print(o.mutation_sequence())