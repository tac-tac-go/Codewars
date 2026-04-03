def special_number(number):
    return 'Special!!' if all(int(i) in [0,1,2,3,4,5] for i in list(str(number))) else 'NOT!!'
