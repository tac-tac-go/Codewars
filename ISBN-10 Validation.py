import re
def valid_ISBN10(isbn): 
    if not(re.match(r'^\d{9}[0-9X]$',isbn)):
        return False
    return sum([int(isbn[i-1])*i if isbn[i-1]!="X" else 10*i  for i in range(1,11)])%11==0
