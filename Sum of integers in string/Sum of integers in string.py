import re
def sum_of_integers_in_string(s):
    return sum(list(map(float,re.findall("[0-9]+",s))))
