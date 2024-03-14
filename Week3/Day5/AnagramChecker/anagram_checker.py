import os
import time
class AnagramChecker():
    def __init__(self, word, words = "sowpods.txt"):
        self.word = word
        self.words = AnagramChecker.__get_words(words)
    
    def is_valid_word(self):
        return self.word.lower() in self.words

    def get_anagrams(self):
        anagrams = []
        for word in self.words:
            if len(word) == len(self.word):
                if sorted(list(word)) == sorted(list(self.word)) and word != self.word:
                    anagrams.append(word)
        return anagrams
     
    @staticmethod
    def __get_words(file_name):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + "/" + file_name) as file:
            words = file.read().lower().splitlines()
        return words
    
# start_time = time.time()  
# ac = AnagramChecker("meat")
# ac.get_anagrams()
# end_time = time.time()  
# print(end_time - start_time)