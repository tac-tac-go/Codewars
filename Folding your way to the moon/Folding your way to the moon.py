def fold_to(distance):
    paper = 0.0001
    count = 0
    while paper < distance:
        paper*=2
        count+=1
    return None if distance < 0 else count
    
