def passed(lst):
    arr = [i for i in lst if i<=18]
    return 'No pass scores registered.' if len(arr)==0 else round(sum(arr)/len(arr))
    
