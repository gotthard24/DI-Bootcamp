class Phone():
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
        
        
    def call(self, other_phone):
        point = f"{self.phone_number} called to {other_phone.phone_number}"
        self.call_history.append(point)
        other_phone.call_history.append(point)
        
        
    def show_call_history(self):
        for i, point in enumerate(self.call_history):
            print(f"{i}. {point}")
            
            
    def send_message(self, content, other_phone):
        cell = {"to" : other_phone.phone_number, "from" : self.phone_number, "content" : content}
        self.messages.append(cell)
        other_phone.messages.append(cell)
        
        
    def show_outgoing_messages(self):
        print(f"Outgoing messages of {self.phone_number}")
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message)
                
                
    def show_incoming_messages(self):
        print(f"Incoming messages of {self.phone_number}")
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message)
                
            
    def show_messages_from(self, other_phone):
        print(f"Messages from {other_phone.phone_number}")
        for message in self.messages:
            if message["from"] == other_phone.phone_number:
                print(message)
        
my_phone = Phone("555")
her_phone = Phone("777")
his_phone = Phone("444")

my_phone.call(her_phone)

my_phone.send_message("hi", her_phone)
her_phone.send_message("yup, hi", my_phone)
his_phone.send_message("lol", my_phone)

her_phone.show_call_history()
my_phone.show_outgoing_messages()
my_phone.show_incoming_messages()
her_phone.show_outgoing_messages()
her_phone.show_incoming_messages()
my_phone.show_messages_from(his_phone)