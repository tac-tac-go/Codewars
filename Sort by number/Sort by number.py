def sort_by_num(s):
    array = [([s[i],s[i+1]]) for i in range(0,len(s),2)]
    return "".join(sum(sorted(array,key=lambda x:x[1]),[]))
