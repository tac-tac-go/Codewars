import re
def dative(word):
    return word+"nak" if re.search(r'[aáoóuú]',word) else word+"nek"
