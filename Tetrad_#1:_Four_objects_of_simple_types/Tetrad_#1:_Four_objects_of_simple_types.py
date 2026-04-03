def tetrad(n):
    return [n, float(n), str(n), (n,)] if isinstance(n, int) else None
