def minimum_steps(numbers, value):
    num_arr = sorted(numbers)
    count,index,sum_v = 0,1,num_arr[0]
    while sum_v < value:
        sum_v += num_arr[index]
        index+=1
        count+=1
    return count
