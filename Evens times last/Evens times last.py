def even_last(numbers): 
    return sum([numbers[i] for i in range(len(numbers)) if i%2==0])*numbers[-1] if len(numbers)>0 else 0
