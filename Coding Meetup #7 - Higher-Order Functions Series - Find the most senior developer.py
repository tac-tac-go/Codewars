def find_senior(lst): 
    return [tmp for tmp in lst if tmp['age']==max(x['age'] for x in lst)]
