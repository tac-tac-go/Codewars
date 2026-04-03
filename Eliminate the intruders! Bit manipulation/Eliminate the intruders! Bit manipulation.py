def eliminate_unset_bits(number):
    string = "".join([str(i) for i in number if int(i)==1])
    string = "0" if len(string) ==0 else string
    return int(string,2)
