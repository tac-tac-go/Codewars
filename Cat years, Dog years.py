def human_years_cat_years_dog_years(human_years):
    cat_y = 0
    for i in range(1,human_years+1):
        if i==1:
            cat_y += 15
        elif i==2:
            cat_y += 9
        else:
            cat_y += 4
    dog_y = 0
    for i in range(1,human_years+1):
        if i==1:
            dog_y += 15
        elif i==2:
            dog_y += 9
        else:
            dog_y += 5
    return [human_years,cat_y,dog_y]        
