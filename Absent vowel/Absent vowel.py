dic = {"a":0,"e":1,"i":2,"o":3,"u":4}
def absent_vowel(x): 
    vowels = set('aeiou')
    present = set(char for char in x.lower() if char in vowels)
    difference = ''.join(sorted(vowels-present))
    return dic[difference]
    
