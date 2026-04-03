def convert(st):
    data_map = {
        "a":"o",
        "o":"u"
    }
    
    array = [data_map[i] if i in data_map else i for i in st]
    return "".join(array)
