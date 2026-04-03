def twice_as_old(dad_years_old, son_years_old):
    count = 0
    if dad_years_old==son_years_old*2:
        None
    elif dad_years_old>son_years_old*2:
        while son_years_old*2!=dad_years_old:
            son_years_old += 1
            dad_years_old += 1
            count += 1
    else:
        while son_years_old*2!=dad_years_old:
            son_years_old -= 1
            dad_years_old -= 1
            count += 1
    return count
    
        
            
            
