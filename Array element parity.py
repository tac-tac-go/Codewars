def solve(arr):
    for i in arr:
        if -i in arr:
            continue
        else:
            return i
