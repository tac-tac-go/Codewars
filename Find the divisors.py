def divisors(integer):
    result = [i for i in range(1,integer+1) if integer%i==0 and (i!=1 and i!=integer)]
    return f"{integer} is prime" if len(result)==0 else result
