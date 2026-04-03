def is_opposite(s1,s2):
    if (s1=="" or s2==""):
        return False
    
    for i1,i2 in zip(s1,s2):
        if not(check(i1,i2)):
            return False
    return True

def check(c1,c2):
    if c1.lower()==c2.lower():
        if (c1.isupper() and c2.islower()) or (c2.isupper() and c1.islower()):
            return True
    return False
