import string
def decode(message):
    alpha = string.ascii_lowercase
    return "".join([' ' if m==' ' else alpha[26-alpha.index(m)-1] for m in message])
