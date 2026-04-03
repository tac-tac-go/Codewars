def get_count(sentence):
    sentence_s = list(sentence)
    return sum([1 for i in sentence_s if i in ["a","i","u","e","o"]])
