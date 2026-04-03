def longest_word(string_of_words):
    arr = string_of_words.split(" ")
    max_length = max([len(i) for i in arr])
    return list(filter(lambda x:len(x)==max_length,arr))[-1]
