def show_sequence(n):
    if n < 0 :
        return str(n)+"<0"
    elif n==0:
        return "0=0"
    else:
        return "+".join(map(str,[i for i in range(0,n+1)]))+" = "+str(sum([i for i in range(0,n+1)]))
