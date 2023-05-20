def nba_extrap(ppg, mpg):
    try:
        return round(ppg* (48/mpg),1)
    except:
        return 0
