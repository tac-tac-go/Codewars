def Hangman(guess, word):
    result = ""
    for i in word:
        if i.lower()==guess.lower():
            result+=i.lower()
        else:
            result+="_"
    return result
