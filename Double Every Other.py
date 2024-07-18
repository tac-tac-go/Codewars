def double_every_other(lst):
    return [v*2 if (i+1)%2==0 else v  for i,v in enumerate(lst)]
