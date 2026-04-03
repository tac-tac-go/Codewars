def find_deleted_number(arr, mixed_arr):
    result = list(set(arr)-set(mixed_arr))
    return result[0] if len(result)>0 else 0
