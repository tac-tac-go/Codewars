def whoseMove(lastPlayer, win):
    if lastPlayer=="black":
        if not(win):
            lastPlayer = "white"
    else:
        if not(win):
            lastPlayer = "black"
    return lastPlayer
            
