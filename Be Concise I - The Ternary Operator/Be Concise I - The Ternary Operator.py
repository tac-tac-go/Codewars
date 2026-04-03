def describe_age(a):
  s="kid"if a<13else"teenager"if a<18else"adult"if a<65else"elderly"
  return f"You're a(n) {s}"
