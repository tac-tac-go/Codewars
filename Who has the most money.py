def most_money(students):
    result = {}
    for s in students:
        result[s.name] = s.twenties*20 + s.tens*10 + s.fives*5
    tmp = [k for k,v in result.items() if v==max(result.values())]
    return tmp[0] if len(tmp)==1 else 'all'
