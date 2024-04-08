def swap(st):
    return "".join([s.upper() if s in ["a","i","u","e","o"] else s  for s in st])
