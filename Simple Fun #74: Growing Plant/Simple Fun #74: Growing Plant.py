def growing_plant(up_speed, down_speed, desired_height):
    if desired_height<=0:return 1
    days = 0
    count = 0
    while count < desired_height:
        days+=1
        count += up_speed
        if count >=desired_height:
            break
        count -= down_speed
    return days
