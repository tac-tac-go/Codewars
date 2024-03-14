def solution(digits):
    m = max(digits)
    possibles = []
    for e, d in enumerate(digits[:-4]):
        if d == m:
            possibles.append(int(digits[e:e+5]))
    return max(possibles)
            
        
