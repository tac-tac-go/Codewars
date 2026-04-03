def string_transformer(s):
    return " ".join([tmp.swapcase() for tmp in s.split(" ")][::-1])
