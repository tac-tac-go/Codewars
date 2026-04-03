def solve(st,a,b):
    st_arr = list(st)
    st_arr[a:b+1] = reversed(st_arr[a:b+1])
    return "".join(st_arr)
