def is_square(arr):
    if len(arr)==0:return None
    return all([(tmp**0.5)%1==0 for tmp in arr])
