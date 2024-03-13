import os 
import re
import string
from nltk.corpus import stopwords

class TextAnalyst():
    def __init__(self, string):
        self.string = string
    
    @classmethod
    def from_file(cls, name):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        full_name = dir_path + "/" + name
        
        with open(full_name, 'r') as file:
            words_li = file.read().split("/n")
            words = ''.join(words_li)
        
        object = cls(words)
        return object
    
    def show_freq(self, word):
        freq = 0
        li = self.string.split(" ")
        for item in li:
            if item.lower() == word.lower():
                freq += 1
                
        print(f"The word {word} appears {freq} times")
        
    def most_common(self):  
        max_freq = self.__create_di()[1]        
        most_common_di = {}
        di = self.__create_di()[0]
        for key, value in di.items():
            if value == max_freq:
                most_common_di.update({key: value})
                
        return most_common_di
    
    def unique(self):
        unique = []
        di = self.__create_di()[0]
        for key, value in di.items():
            if value == 1:
                unique.append(key)
                
        return unique
    
    def __create_di(self):
        li = self.string.lower().split(" ")
        di = {}
        max_freq = 0
        for item in li:
            if item in di:
                di[item] += 1
                if di[item] > max_freq:
                    max_freq = di[item]
            else:
                di[item] = 1
        return [di, max_freq]
    
    
class TextModification(TextAnalyst):   
    def wo_stop_words(self):
        text_wo_sw = ''
        stop_words = stopwords.words('english')
        words = self.wo_specs().split(" ")
        for word in words: 
            if word.lower() not in stop_words:
                text_wo_sw += f"{word} "
            
        return text_wo_sw
    
    def wo_punct(self):
        translator = str.maketrans('', '', string.punctuation)
        cleaned_text = self.string.translate(translator)
        
        return cleaned_text
    
    def wo_specs(self):
        pattern = r'[^a-zA-Z0-9\s]'  
        cleaned_text = re.sub(pattern, '', self.string)

        return cleaned_text

ta1 = TextAnalyst("A good book would sometimes cost as much as a good house.")
ta2 = TextAnalyst.from_file('the_stranger.txt')
ta1.show_freq("Good")
print(ta1.most_common())
print(ta1.unique())   

print(ta2.unique())

tm = TextModification("am I? on, or with! the phone.")
print(tm.wo_specs())
print(tm.wo_stop_words())
print(tm.wo_punct())