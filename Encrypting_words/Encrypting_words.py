def encrypt(s):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    return "".join([alpha[25-alpha.index(i)] for i in s])
