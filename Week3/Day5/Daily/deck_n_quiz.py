#Part 1
#1. Class is an object that represents a new, custom-created type of data. 
#Its instances have custom properties and behavior defined by the class.
#2. Instance is a single exemplar of a class
#3. Encapsulation is a one of three main principles of OOP. It's says that every part of code should be like a "capsule",
# open to reading, but closed to changing from outside
#4. Abstraction is a theoretical entity with some purpose but without the specific form
#5. Inheritance is a concept in object-oriented programming that allows 
# for the creation of a more flexible structure of classes by enabling 
# the sharing of common properties and behaviors among related classes.
#6. Multiple inheritance it's a situation when any object inherits from more than one object at a time
#7. Polymorphism is the concept of creating behavior that varies from each individual inherited class
#8. MRO is a concept used in multiple inheritance to determine the order in which methods should be called

#Part 2
import random

class Deck():
    def __init__(self):
        self.deck = self.__new_deck()
    
    def show_deck(self):
        print()
        print(f"There is {len(self.deck)} cards in the deck")
        for card in self.deck:
            print(f'{card.value} of {card.suit}')
        print()
        return self
            
    def shuffle_deck(self):
        random.shuffle(self.deck)
        return self
    
    def deal(self):
        card = self.deck.pop(0)
        print(f"\nYour card is {card.value} of {card.suit}")
        return self
        
    def rebuild(self):
        self.deck = self.__new_deck()
        self.shuffle_deck()
        return self
    
    @staticmethod    
    def __new_deck():
        deck = []
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        for suit in suits:
            for value in values:
                deck.append(Card(suit, value))               
        return deck
        
    

class Card():
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value 
        

my_deck = Deck()
my_deck.show_deck()
my_deck.shuffle_deck().show_deck()
my_deck.deal()
my_deck.show_deck()
my_deck.rebuild().show_deck()