def add(num1,num2):
    num1,num2 = str(num1),str(num2)
    num1 = num1.zfill(max(len(num1),len(num2)))
    num2 = num2.zfill(max(len(num1),len(num2)))
    return int("".join([str(int(i)+int(j)) for i,j in zip(num1,num2)]))
