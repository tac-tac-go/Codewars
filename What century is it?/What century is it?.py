import math
def what_century(year):
    result = str(int((math.ceil(int(year)/1000 * 10)/10)*10))
    if result[-2]=='1':
        return result+"th"
    elif result[-1]=='1':
        return result+"st"
    elif result[-1]=='2':
        return result+"nd"
    elif result[-1]=='3':
        return result+"rd"
    else:
        return result+"th"
