def furthest_distance(points):
    result  = 0
    for i in range(len(points)-1):
        for j in range(i+1,len(points)):
            value = ((points[i][0]-points[j][0])**2+(points[i][1]-points[j][1])**2)**0.5
            if value > result:
                result = value
    return round(result,2)
