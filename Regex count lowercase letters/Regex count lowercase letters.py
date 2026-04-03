def lowercase_count(strng):
    return sum([1 for word in list(strng) if word.islower() and word.isalpha()])
