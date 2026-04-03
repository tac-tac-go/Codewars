def pattern(n):
    result = []
    for i in range(n):
        if i==0:
            result.append("1")
        else:
            result.append("1"+"*"*(i)+str(i+1))
    return "\n".join(result)

