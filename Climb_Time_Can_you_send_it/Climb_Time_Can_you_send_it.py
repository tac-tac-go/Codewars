def isfloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False

def can_climb(rope_length,climb_height):
    if isfloat(str(rope_length)) and isfloat(str(climb_height)):
        if(rope_length >= climb_height/3.281):
            return True
        else:
            return False
    else:
        return None
