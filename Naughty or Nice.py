from collections import Counter
def naughty_or_nice(data):
    result = Counter([tmp2 for tmp in data.values() for tmp2 in tmp.values()])
    return 'Nice!' if result['Nice']>=result['Naughty'] else 'Naughty!'
