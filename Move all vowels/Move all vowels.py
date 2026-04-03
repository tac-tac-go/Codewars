import re
def move_vowels(input): 
    return re.sub(r'[aiueo]',"",input) + re.sub(r'[^aiueo]',"",input)
