def sort_reindeer(reindeer_names):
    arr = [str_v.split(" ") for str_v in reindeer_names]
    arr = sorted(arr,key=lambda x:x[1])
    return [" ".join(i) for i in arr]
