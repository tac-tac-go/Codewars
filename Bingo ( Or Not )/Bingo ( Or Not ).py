import string
def bingo(array): 
    alpha = string.ascii_lowercase
    count = {"b":0,"i":0,"n":0,"g":0,"o":0}
    for i in array:
        if alpha[i-1] in ["b","i","n","g","o"]:
            count[alpha[i-1]]+=1
    return "LOSE" if list(count.values()).count(0)>0 else "WIN"
