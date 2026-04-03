import re
def check_vowel(strng, position):
    if position>=len(strng) or position<0:
        return False
    return True if re.match(r'[aieuo]',strng[position],re.I) else False
