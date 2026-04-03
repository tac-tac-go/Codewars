def find_longest(string):
    spl = string.split(" ")
    return max(list(map(lambda x:len(x),spl)))
