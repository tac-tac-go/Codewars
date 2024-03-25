def insert_dash(num):
    num = str(num)
    arr = [f"{num[i]}-" if (int(num[i])%2==1 and int(num[i+1])%2==1) else num[i]  for i in range(0,len(num)-1)]
    arr.extend([num[-1]])
    return "".join(arr)
