def array(string):
    array = string.split(",")
    return " ".join(list(map(str,array[1:-1]))) if len(array)>2 else None
