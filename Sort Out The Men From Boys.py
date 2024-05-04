def men_from_boys(arr):
    even = set([i for i in arr if i%2==0])
    odd = set([i for i in arr if i%2==1])
    return sorted(even)+sorted(odd)[::-1]
