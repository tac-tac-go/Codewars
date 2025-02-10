def remove(s):
    return " ".join([si for si in s.split(" ") if si.count("!")!=1])
