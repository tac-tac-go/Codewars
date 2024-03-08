def vowel_one(s):
    return "".join(["1" if i.lower() in "aiueo"  else "0" for i in s])
