import re
def automorphic(n):
    square = str(n**2)
    return "Automorphic" if re.search('({})$'.format(str(n)),square) else "Not!!"
 
