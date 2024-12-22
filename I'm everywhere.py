def i(word):
    vowel_c = sum([1 for s in word if s.lower() in ['a','i','u','e','o']])
    if len(word)>0 and word[0].lower()!="i" and vowel_c < len(word)-vowel_c and word[0].isupper():
        return "i"+word[0].upper()+word[1:]
    return "Invalid word"
    
