def solve(arr):
    r = []
    for i in arr[::-1]:
        if (not r) or (r[-1] < i):
            r.append(i)
    return r[::-1]
