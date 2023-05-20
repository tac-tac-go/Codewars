def same_case(a, b): 
    print()
    if not(a.isalpha()) or not(b.isalpha()):
        return -1
    if (a.islower() == b.islower()) or (a.isupper() == b.isupper()):
        return 1
    return 0
