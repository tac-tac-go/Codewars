def vowel_2_index(string):
    return "".join([str(i+1) if j.lower() in "aiueo" else j  for i,j in enumerate(string)])
