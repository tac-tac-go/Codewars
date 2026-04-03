def shark(pontoon_distance, shark_distance, you_speed, shark_speed, dolphin):
    if dolphin:
        shark_speed = shark_speed / 2
    return "Shark Bait!" if (pontoon_distance/you_speed) > (shark_distance/shark_speed) else "Alive!"
        
