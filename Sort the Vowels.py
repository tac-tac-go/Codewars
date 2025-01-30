def sort_vowels(s):
    if type(s)!=str:
        return ''
    return "\n".join(["|"+tmp if tmp.lower() in ['a','i','u','e','o'] else tmp+"|" for tmp in s])
