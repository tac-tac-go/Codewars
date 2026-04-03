def direction(facing, turn):
    direc = ["N","NE","E","SE","S","SW","W","NW","N"]
    rot = [0,45,90,135,180,225,270,315,360]
    turn_v = rot[direc.index(facing)] + turn
    turn_v = 360-(abs(turn_v)%360)  if turn_v < 0 else turn_v%360
    return direc[rot.index(turn_v)]
