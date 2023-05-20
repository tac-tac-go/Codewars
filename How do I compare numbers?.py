def what_is(x):
    if x is 42:
        return 'everything'
    elif str(x)==str(42 * 42):
        return 'everything squared'
    else:
        return 'nothing'
