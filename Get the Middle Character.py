def get_middle(s):
    middle = len(s)//2
    return s[middle-1:middle+1]  if len(s)%2==0 else s[middle]
