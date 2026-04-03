def filter_long_words(sentence, n):
    return [v for v in sentence.split(" ") if len(v)>n]
