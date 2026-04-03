def swap_vowel_case(st): 
    result =""
    for i in st:
        if i.lower() in ["a","i","u","e","o"]:
            if i.islower():
                result += i.upper()
            else:
                result += i.lower()
        else:
            result +=i
    return result
