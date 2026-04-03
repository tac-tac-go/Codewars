def solution(s):
    result = "".join([" "+i if i.isalpha() and i.isupper() else i for i in s])
    return result
