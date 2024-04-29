def switcher(arr):
    alpha = "abcdefghijklmnopqrstuvwxyz"[::-1]+"!? "
    return "".join([alpha[int(i)-1] for i in arr])
    
