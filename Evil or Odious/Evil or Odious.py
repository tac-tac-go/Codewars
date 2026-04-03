def evil(n):
    return "It's Odious!" if sum([1 for i in str(format(n,'b')) if i=="1"])%2==1 else "It's Evil!"
