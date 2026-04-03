def century(year):
    divide = year/100
    return int(divide) if divide%1==0 else int(divide)+1
