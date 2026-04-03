from collections import Counter
def get_strings(city):
    city = city.lower().replace(" ","")
    freq = Counter(city)
    result = []
    for s in city:
        tmp = s.lower()+":"+freq[s.lower()]*"*"
        if tmp not in result:
            result.append(tmp)
    return ",".join(result)
