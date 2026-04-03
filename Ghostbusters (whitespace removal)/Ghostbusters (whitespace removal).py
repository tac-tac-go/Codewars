import re
def ghostbusters(building):
    return  re.sub(r' ',"",building) if  " " in building else "You just wanted my autograph didn't you?"
