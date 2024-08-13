def how_many_years (date1,date2):
    data1_year = date1.split("/")[0]
    data2_year = date2.split("/")[0]
    return abs(int(data2_year)-int(data1_year))
