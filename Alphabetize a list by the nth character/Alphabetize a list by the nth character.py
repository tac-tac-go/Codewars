def sort_it(words, n):
    words_l = [tmp.strip() for tmp in words.split(",")]
    return ", ".join(sorted(words_l,key=lambda x:x[n-1]))
