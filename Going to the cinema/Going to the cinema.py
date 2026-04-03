import math
def movie(card, ticket, perc):
    cnt = 0
    while ticket * cnt <= math.ceil(card):
        cnt+=1
        card += ticket * perc ** cnt
    return cnt;

