import math
def cost(mins):
    cost = 30
    if mins<=65:
        return cost
    else:
        mins-=60
        mins = 30*(mins//30) if mins%30<=5 else mins
        return math.ceil(mins/30)*10+cost
