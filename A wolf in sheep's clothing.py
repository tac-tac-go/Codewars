def warn_the_sheep(queue):
    queue = queue[::-1]
    search_idx = queue.index("wolf")
    return 'Pls go away and stop eating my sheep' if search_idx==0 else "Oi! Sheep number {}! You are about to be eaten by a wolf!".format(search_idx)
