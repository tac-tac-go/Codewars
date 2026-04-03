def solve(s):
    s_r = list(s[::-1].replace(' ', ''))
    for i,v in enumerate(s):
        if " " == v:
            s_r.insert(i," ")
    return "".join(s_r)
            
        
