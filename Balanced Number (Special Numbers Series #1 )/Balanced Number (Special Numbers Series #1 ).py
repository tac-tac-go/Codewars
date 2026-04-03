def balanced_num(number):
    num = str(number)
    print(number)
    if len(num)<=2:
        return "Balanced"
    else:
        if len(num)%2==1:
            return "Balanced" if sum(map(int,list(num[:len(num)//2])))==sum(map(int,list(num[len(num)//2+1:]))) else "Not Balanced"
        else:
            return "Balanced" if sum(map(int,list(num[:len(num)//2-1])))==sum(map(int,list(num[len(num)//2+1:]))) else "Not Balanced"
        
        
