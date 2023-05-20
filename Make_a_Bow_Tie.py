def bow_tie(num):
    result = []
    result.append("  "*num)
    result.append("\n")
    for i in range(1,num+1,1):
        result.append("*"*i)
        result.append(" "*(2*(num-i)))
        result.append("*"*i)
        result.append("\n")
    for i in range(num,0,-1):
        result.append("*"*i)
        result.append(" "*(2*(num-i)))
        result.append("*"*i)
        result.append("\n")
    result.append("  "*num)
    result.append("\n")
    return "".join(result)
