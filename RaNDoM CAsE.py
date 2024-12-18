import random
def random_case(x):
    return "".join([s.upper() if random.randint(1,2)==1 else s.lower()  for s in x])
