from collections import Counter
def find_uniq(arr):
    result = ["".join(sorted(set(tmp.lower().replace(" ","")))) for tmp in arr]
    result_c = Counter(result)
    fil = [k for k,v in result_c.items() if v==1][0]
    return arr[result.index(fil)]
