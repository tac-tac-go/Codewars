import string
def even_chars(st): 
    alpha = list(string.ascii_lowercase)
    return [v for i,v in enumerate(st) if (i+1)%2==0] if len(st)>=2 and len(st)<=100 else "invalid string"
