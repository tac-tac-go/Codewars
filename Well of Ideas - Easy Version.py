def well(x):
    count = x.count('good')
    return 'Publish!' if count==1 or count==2 else "Fail!" if count==0 else "I smell a series!"
