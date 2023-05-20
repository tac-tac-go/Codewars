def next_item(xs, item):
    xs = iter(xs)
    for i in xs:
        if i==item:
            break
    return next(xs,None)
