def solution(s):
    result = []
    for i in range(0,len(s),2):
        result.append(s[i:i+2])
    if len(s)%2==1:
        result[-1]=result[-1]+"_"
    return result
