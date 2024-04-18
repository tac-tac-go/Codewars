def greet_developers(lst): 
    result = []
    for l in lst:
        tmp = {}
        for v in l:
            tmp[v]=l[v]
        tmp['greeting'] = f"Hi {l['firstName']}, what do you like the most about {l['language']}?"
        result.append(tmp)
    return result
    
        
