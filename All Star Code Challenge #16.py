def no_repeat(string):
    return [tmp for tmp in string if string.find(tmp)==string.rfind(tmp)][0]
