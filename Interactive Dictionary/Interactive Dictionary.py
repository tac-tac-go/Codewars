class Dictionary():
    def __init__(self):
        self.dict = {}
        
    def newentry(self, word, definition):
        self.dict[word] = definition
        
    def look(self, key):
        if key in self.dict.keys():
            return self.dict[key]
        else:
            return "Can't find entry for {}".format(key)
            
