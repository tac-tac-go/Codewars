def contain_all_rots(strng, arr):
    for i in range(len(strng)):
        if strng[i:len(strng)] + strng[:i] not in arr:
            return False
    return True
