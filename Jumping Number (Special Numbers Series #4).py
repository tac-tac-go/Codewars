def jumping_number(number):
    number = str(number)
    flag = True
    for i in range(1,len(number)):
        if abs(int(number[i])-int(number[i-1]))==1:
            continue
        else:
            flag = False
            break
    return "Jumping!!" if flag else "Not!!"
