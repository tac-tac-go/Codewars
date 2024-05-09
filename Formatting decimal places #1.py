def two_decimal_places(x):
    split_s = str(x).split(".")
    return float(split_s[0]+"."+split_s[1][:2])
