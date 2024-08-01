def spoonerize(words):
    a1,a2 = words.split(" ")
    return a2[0]+a1[1:]+" "+a1[0]+a2[1:]
