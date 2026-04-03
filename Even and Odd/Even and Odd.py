def even_and_odd(n): 
    even,odd = "",""
    for i in str(n):
        if int(i)%2==0:
            even+=i
        else:
            odd+=i
    return (int(even or 0),int(odd or 0))
