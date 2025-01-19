import math
def what_time_is_it(angle):
    f,i = math.modf(angle/30)
    i = 12 if i==0 else i
    return f"{str(int(i)).zfill(2)}:{str(math.floor(f*60)).zfill(2)}"
