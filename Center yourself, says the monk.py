def center(strng, width, fill=' '):
    width -= len(strng)
    right = width // 2
    left = width - right
    return "{}{}{}".format(left * fill, strng, right * fill)
