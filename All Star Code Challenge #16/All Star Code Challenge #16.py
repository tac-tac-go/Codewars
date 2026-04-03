def no_repeat(s):
    return next(c for c in s if s.find(c) == s.rfind(c))
