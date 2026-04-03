def split_the_bill(x):
    ave_arr = [value for value in x.values()]
    ave = sum(ave_arr) / len(ave_arr)
    return {key:round(value-ave,2) for key,value in x.items()}
