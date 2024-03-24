def process_array(arr, callback):
    return [callback(i) for i in arr]
