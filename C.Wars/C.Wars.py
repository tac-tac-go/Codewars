def initials(name):
    split_arr  = name.split(" ")
    return ".".join([split_arr[i].title() if i==len(split_arr)-1 else split_arr[i][0].upper()  for i in range(len(split_arr))])
