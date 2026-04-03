import re
def count_letters_and_digits(s):
    return sum([1 for i in s if re.match('[A-Za-z0-9]',i)])
