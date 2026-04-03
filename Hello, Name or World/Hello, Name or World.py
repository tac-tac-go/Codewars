def hello(*name):
    return "Hello, World!" if len(name)==0 or name[0]==""  else f"Hello, {name[0].capitalize()}!"
    
