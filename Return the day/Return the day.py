def whatday(num):
    str_w = "sunday monday tuesday wednesday thursday friday saturday".split(" ")
    if not(num>=1 and num<=7):
        return 'Wrong, please enter a number between 1 and 7'
    return list(map(lambda x:x.capitalize(),str_w))[num-1]
