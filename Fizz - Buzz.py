def solution(number):
    number-=1
    n15 = number//15
    n3 = number//3 - n15
    n5 =number//5 -n15
    return [n3,n5,n15]
    
