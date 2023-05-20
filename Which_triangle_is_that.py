def type_of_triangle(a, b, c): 
    if type(a)!=int or type(b)!=int or type(c)!=int:
            return "Not a valid triangle"
    if(len([a,b,c])!=3):
            return "Not a valid triangle"

    if a+b > c and b+c > a and c+a > b:
    
        if len(set([a,b,c]))==1:
            return "Equilateral"
        if len(set([a,b,c]))==2:
            return "Isosceles"
        if len(set([a,b,c]))==3:
            return "Scalene"
    else:
        return "Not a valid triangle"
    
