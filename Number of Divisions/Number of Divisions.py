def divisions(n, divisor):
    count = 0
    while n/divisor>=1:
        n = n//divisor
        count+=1
    return count
