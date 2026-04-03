def train(s):
  if s[0]=="A":
      return 15+len(s[1:])*5
  elif s[0]=="B":
    return 10+len(s[1:])*5
  elif s[0]=="C":
    return 7+len(s[1:])*5
  elif s[0]=="D":
    return 8+len(s[1:])*5


