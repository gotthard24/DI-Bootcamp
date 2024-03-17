class Human():
    id_number = 1
    def __init__(self, name, age, blood_type, priority = False):
        self.id = Human.id_number
        self.name = name
        self.age = age
        self.blood_type = blood_type
        self.priority = priority
        Human.id_number += 1
        
class Queue():
    def __init__(self, queue):
        self.queue = queue
    
    def show_q(self):
        for i in range(len(self.queue)):
            print(f'{i + 1}. {self.queue[i].name}')
        print()
            
    def add(self, human):
        if human.age >= 60 or human.priority == True:
            self.queue.insert(0, human)
        else:
            self.queue.append(human)
            
    def find(self, name):
        for i in range(len(self.queue)):
            if self.queue[i].name.lower() == name.lower():
                print(f"{self.queue[i].name}'s place in the queue is {i + 1}")
                
    def swap(self, person1, person2):
        ind1 = next((i for i, human in enumerate(self.queue) if human == person1), None)
        ind2 = next((i for i, human in enumerate(self.queue) if human == person2), None)
        
        if ind1 is not None and ind2 is not None:
            self.queue[ind1], self.queue[ind2] = self.queue[ind2], self.queue[ind1]
        else:
            print("One or both persons not found in the queue.")
            
    def get_next(self):
        return self.queue.pop(0)
    
    def get_next_blood_type(self, blood_type):
        for human in self.queue:
            if human.blood_type == blood_type:
                self.queue.remove(human)
                break
            
    def sort_q(self):
        self.queue.sort(key=lambda x: (not x.priority, x.age, -x.age))
        
daniel = Human("Daniel", 26, 'A')
natalie = Human('Natalie', 27, 'B')
yulia = Human('Yulia', 40, 'AB')
vladimir = Human('Vladimir', 60, 'A', True)
yulia_k = Human('YuliaK', 64, 'AB', True)

q = Queue([daniel, natalie, yulia])
q.add(vladimir)
q.add(yulia_k)
q.show_q()
q.find('daniel')
q.swap(daniel, natalie)
q.show_q()
# q.get_next()
q.show_q()
# q.get_next_blood_type('AB')
q.show_q()
q.sort_q()
q.show_q()