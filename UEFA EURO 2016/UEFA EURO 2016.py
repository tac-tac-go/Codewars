def uefa_euro_2016(teams, scores):
    if scores[0]==scores[1]:
        return "At match {} - {}, teams played draw.".format(teams[0],teams[1])
    elif scores[0]>scores[1]:
        return "At match {} - {}, {} won!".format(teams[0],teams[1],teams[0])
    else:
        return "At match {} - {}, {} won!".format(teams[0],teams[1],teams[1])
        
