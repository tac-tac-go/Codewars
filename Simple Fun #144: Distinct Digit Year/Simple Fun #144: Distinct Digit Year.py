def distinct_digit_year(year):
    year+=1
    while len(list(set(str(year))))!=len(str(year)):
        year+=1
    return year
        
