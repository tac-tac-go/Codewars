def validate_key(key):
    #put ur magik code here
    section1 = key[0:3]
    section2 = key[4:]
    print(section1,section2)
    if (section1 not in ["333","444","666","777","888","999"]) and section2.isdigit():
        if sum(map(int,list(section2)))%7==0:
            return True
        else:
            return False
    else:
        return False
