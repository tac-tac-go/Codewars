def last_survivor(letters, coords): 
    letters_arr = list(letters)
    for i in coords:
        del letters_arr[i]
    return "".join(letters_arr)
        
