def count_wins(winners_list, country):
    return sum([1 for dic in winners_list if dic['country']==country])
