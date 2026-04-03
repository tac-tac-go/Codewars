def is_nice(arr):
    if len(arr)==0:return False
    return all([True if i+1 in arr or i-1 in arr else False for i in arr])
