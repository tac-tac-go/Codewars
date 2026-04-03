from functools import reduce
def strong_enough(earthquake, age):
    tmp = reduce(lambda a,b:a*b,[sum(arr) for arr in earthquake])
    strength=1000
    strength*=(0.99**(age))
    return "Safe!" if tmp<=strength else "Needs Reinforcement!"
