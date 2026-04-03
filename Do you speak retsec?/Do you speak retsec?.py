def reverse_by_center(s):
    middle = len(s)//2
    if len(s)%2==0:
        return s[middle:]+s[:middle]
    else:
        return s[middle+1:]+s[middle]+s[:middle]
        
