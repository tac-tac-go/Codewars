def how_much_i_love_you(nb_petals):
    result = ["I love you","a little","a lot","passionately","madly","not at all"]
    return result[(nb_petals-1)%6]
