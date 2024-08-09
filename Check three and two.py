from collections import Counter
def check_three_and_two(array):
    arr = sorted(Counter(array).values())
    return arr[0]==2 and arr[1]==3
