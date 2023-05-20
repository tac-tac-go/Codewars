def initialize_names(name):
    name_a = name.split(" ")
    if len(name_a)==1:
        return name_a[0]
    if len(name_a)==2:
        return " ".join(name_a)
    return " ".join([name_a[0]," ".join(list(map(lambda x:x[0]+".",name_a[1:-1]))),name_a[-1]])

