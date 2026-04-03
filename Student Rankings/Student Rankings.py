def post_grades(students):
    array = list(map(lambda x:x.split("-"),students))
    if len(array)==0:
        return []
    else:
        output = []
        for i in array:
            array2 = list(filter(lambda x:len(x)>0,i[2].split(" ")))
            array2 = list(map(lambda x:float(x),array2))
            result = sum(array2)/len(array2)
            output.append([i[0].strip(),result])
        return list(sorted(output,key=lambda x:-x[1]))
