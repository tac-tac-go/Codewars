def find_longest(arr):
    return sorted({i:len(str(i)) for i in arr}.items(),key=lambda x:-x[1])[0][0]
