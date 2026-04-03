def to_time(seconds):
    hour = seconds//(3600)
    minute = (seconds-hour*3600)//60
    return f'{hour} hour(s) and {minute} minute(s)'
