def to_freud(sentence):
  if len(sentence)>0:
    return " ".join(["sex"]*len(sentence.split(" ")))
  return ""
