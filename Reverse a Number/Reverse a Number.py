def reverse_number(n):
    result = int(str(abs(n))[::-1])
    return result if n > 0 else -result
