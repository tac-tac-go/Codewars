def findNumberWithMostDivisors(numbers):
    result = []
    from functools import reduce
    for i in numbers:
        ans = 0
        for j in range(1,10001):
            if i%j==0:
                ans+=1
        result.append(ans)
    return [numbers[i] for i in range(len(result)) if result[i]==max(result)]
                
    
