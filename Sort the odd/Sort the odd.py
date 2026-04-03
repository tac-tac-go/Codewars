def sort_array(source_array):
    odd_index  = [i for i,j in enumerate(source_array) if j%2==1]
    odd_value  = sorted([j for i,j in enumerate(source_array) if j%2==1])
    for i in range(len(odd_index)):
        source_array[odd_index[i]]=odd_value[i]
    return source_array
