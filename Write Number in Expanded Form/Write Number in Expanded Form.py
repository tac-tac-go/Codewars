import re
def expanded_form(num):
    num_s = str(num)
    arr = [num_s[i]+"0"*(len(num_s[i+1:])) for i in range(len(num_s))]
    arr_f = list(filter(lambda x:not(re.match("^0+$",x)),arr))
    return " + ".join(arr_f)
