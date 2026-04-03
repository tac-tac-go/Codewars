def reverse_middle(lst):
    even = lst[len(lst)//2-1:len(lst)//2+1][::-1]
    odd = lst[len(lst)//2-1:len(lst)//2+2][::-1]
    return even if len(lst)%2==0 else odd
