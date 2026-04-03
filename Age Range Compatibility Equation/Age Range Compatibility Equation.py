import math
def dating_range(age):
    if age>=14:
        return "{}-{}".format(math.floor((age/2)+7),math.floor(age-7)*2)
    else:
        return "{}-{}".format(math.floor(age-(0.1*age)),math.floor(age+(0.1*age)))
