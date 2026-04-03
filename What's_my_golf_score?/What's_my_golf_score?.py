def golf_score_calculator(par_string, score_string):
    return sum([int(j)-int(i) for i,j in zip(list(par_string),list(score_string))])
