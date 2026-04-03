def to_csv_text(array):
    return "\n".join([",".join(map(str,i)) for i in array])
    
