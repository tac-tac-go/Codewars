def word_to_bin(word):
    return [format(ord(i),'b').zfill(8) for i in word]
