
def sort_by_length(arr):
    return list(dict(sorted({i:len(i) for i in arr}.items(),key=lambda x:x[1])).keys())
