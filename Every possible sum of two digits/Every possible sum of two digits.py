def digits(num):
    str_s = str(num)
    return [int(str_s[i])+int(str_s[j]) for i in range(len(str_s)-1) for j in range(i+1,len(str_s))]
            
