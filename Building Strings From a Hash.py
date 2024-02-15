def solution(pairs):
    return ",".join([f"{i} = {j}" for i,j in pairs.items()])
