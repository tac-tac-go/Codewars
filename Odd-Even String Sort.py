def sort_my_string(s):
    odd_s = [j for i,j in enumerate(s) if i%2==1]
    even_s = [j for i,j in enumerate(s) if i%2==0]
    return "".join(even_s)+" "+"".join(odd_s)
