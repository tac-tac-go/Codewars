vowel = "aeiou"
def encode(st):
    return "".join([str(vowel.index(s)+1) if s in vowel else s for s in st ])
    
def decode(st):
    fil = list(map(lambda x:str(x),range(1,6)))
    return "".join([vowel[int(s)-1] if s in fil else s for s in st ])
