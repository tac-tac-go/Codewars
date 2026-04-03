def is_very_even_number(n):
    return  judge(n) if len(str(n))==1 else is_very_even_number(sum([int(i) for i in str(n)]))

def judge(n):
    return False if n%2==1 else True
