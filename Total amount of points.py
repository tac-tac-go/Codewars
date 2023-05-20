def points(games):
    points = 0
    for i in games:
        x,y = map(int,i.split(":"))
        points += 3 if x>y else 0 if x<y else 1
    return points
        
