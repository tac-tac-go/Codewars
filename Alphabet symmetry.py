def solve(strings : list[str]) -> list[int]:
    alpha = "abcdefghijklmnopqrstuvwxyz"
    tmp = []
    for string in strings:
        count = 0
        for i,s in enumerate(string):
                if alpha.index(s.lower()) == i:
                    count+=1
        tmp.append(count)
    return tmp
