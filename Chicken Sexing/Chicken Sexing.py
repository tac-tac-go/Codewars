def correctness(a, b): 
    result = 0
    for i in range(len(a)):
        if a[i]==b[i]:
            result+=1
        elif a[i]!=b[i] and (a[i]=="?" or b[i]=="?"):
            result+=0.5
    return result
