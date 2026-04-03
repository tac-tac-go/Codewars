def replace_all(obj, find, replace):
    result = [replace if i==find else i for i in obj]
    return "".join(result)  if type(obj)==str else result
