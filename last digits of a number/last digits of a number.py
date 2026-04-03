def solution(n,d):
    if d <0:return []
    return list(map(int,list(str(n)[::-1][:d][::-1])))
