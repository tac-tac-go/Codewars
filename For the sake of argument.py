def numbers(*args):
    print(args)
    return all([type(x)==int or type(x)==float for x in args])
