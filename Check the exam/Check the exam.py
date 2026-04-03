def check_exam(arr1,arr2):
    return max(sum([4 if i==j else 0 if j=="" else -1  for i,j in zip(arr1,arr2)]),0)
  

