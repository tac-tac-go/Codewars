def is_digit(n):
   if n.isdigit():
    if 0 <= float(n) and float(n) <= 9:
        return True
   return False
