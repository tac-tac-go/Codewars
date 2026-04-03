def perimeter_sum(a):
    result = 0
    if len(a)<=2:
        return sum(sum(a,[]))
    else:
        result+=sum(a[0])+sum(a[-1])
        result += sum([a[i][0]+a[i][-1] for i in range(1,len(a)-1)])
        return result
    
