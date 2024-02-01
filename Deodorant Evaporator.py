def evaporator(content, evap_per_day, threshold):
    threshold_v = content*((threshold/100))
    index = 0
    while content>=threshold_v:
        content = content*(1-(evap_per_day/100))
        index+=1
    return index
