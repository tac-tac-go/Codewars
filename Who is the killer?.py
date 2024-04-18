def killer(suspect_info, dead):
    return [key for key,value in suspect_info.items() if all(i in value for i in dead)][0]
