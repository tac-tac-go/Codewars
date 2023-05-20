def reverse(st):
    str_r = list(map(lambda x:x.strip(),st.split(" ")))[::-1]
    str_r = list(filter(lambda x:len(x)>0,str_r))
    return " ".join(str_r).strip()
