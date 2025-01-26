def up_array(arr):
    fil1 = len(arr)>0
    fil2 = all([len(str(s))==1 for s in arr])
    if fil1 and fil2:
        str1 = "".join(map(lambda x:str(x),arr))
        str2 = str(int(str1)+1).rjust(len(str1),'0')
        return list(map(lambda x:int(x),list(str2)))
    else:
        return None


