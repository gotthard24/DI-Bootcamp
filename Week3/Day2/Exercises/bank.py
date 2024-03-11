import dk

class BankAccount():
    def __init__(self, balance, user, passw):
        self.balance = balance
        self.user = user
        self.passw = passw
        self.is_auth = False
        
    def deposit(self, num):
        if dk.is_int(num) < 0:
            raise Exception("U can't deposit negative number")
        elif self.is_auth == False:
            print("Authentificate first")
        else:
            self.balance += num
    
    def withdraw(self, num):
        if dk.is_int(num) < 0:
            raise Exception("U can't withdraw negative number")
        elif self.is_auth == False:
            print("Authentificate first")
        else:
            self.balance -= num
            
    def authenticate(self, user, passw):
        if user == self.user and passw == self.passw:
            self.is_auth = True
            print("Authentification complete")
        else:
            print("Authentification failed")
        
        
        
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, user, passw, minimum_balance = 0):
        super().__init__(balance, user, passw)
        self.minimum_balance = minimum_balance
        
    def withdraw(self, num):
        if dk.is_int(num) < 0:
            raise Exception("U can't withdraw negative number")
        elif self.balance - num >= self.minimum_balance:
            self.balance -= num
        elif self.is_auth == False:
            print("Authentificate first")
        else:
            print("Not enough money")
        
    
account = BankAccount(1000, "smbd", 123)
account.deposit(500)
print(account.balance)
account.withdraw(1501)
print(account.balance)

my_acc = MinimumBalanceAccount(1000, "Daniel", 555)
my_acc.withdraw(1001)
print(my_acc.balance)
my_acc.authenticate("Daniel", 556)
my_acc.authenticate("Daniel", 555)
my_acc.withdraw(990)
print(my_acc.balance)