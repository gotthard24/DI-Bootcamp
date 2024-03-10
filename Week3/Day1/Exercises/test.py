# li = ["yak"]
# print(type(str(li)))
# print(str(li[0]))
# print(li[0])

class Computer():

    def __init__(self):
        self.name = "Apple Computer" # public
        self.__max_price = 900 # private
        
    def sell(self):            # public method
        print(f"Selling Price: {self.__max_price}")

    def __sell(self):          # private method
      print('This is private method')

    def set_max_price(self, price):
        self.__max_price = price
        

pc = Computer()
# pc.sell()
pc.__sell()