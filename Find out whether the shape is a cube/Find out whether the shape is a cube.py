def cube_checker(volume, side):
    if volume==0 or side==0:
        return False
    length_width = volume//side
    length = length_width**0.5
    width = length_width**0.5
    return True if side==length==width else False
