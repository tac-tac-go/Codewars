def largest(n, xs):
    if n==0:return []
    return sorted(xs)[-n:]
