def spin_words(sentence):
    return " ".join([v[::-1] if len(v)>=5 else v for v in sentence.split(" ")])
