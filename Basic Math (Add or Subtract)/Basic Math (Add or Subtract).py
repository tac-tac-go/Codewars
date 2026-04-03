import re
def calculate(s):
    arr1 = re.split("[a-z]+",s)
    arr2 =[i for i in re.split("[0-9]+",s) if len(i)>0]
    count = int(arr1[0])
    for i in range(len(arr2)):
        if(arr2[i]=="plus"):
            count+= int(arr1[i+1])
        else:
            count-= int(arr1[i+1])
    return str(count)
        
