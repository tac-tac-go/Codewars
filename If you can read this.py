from preloaded import NATO # NATO['A'] == 'Alfa', etc
import string
def to_nato(words : str) -> str:
    return " ".join([NATO[tmp] if tmp in string.ascii_uppercase else tmp for tmp in "".join([s for s in words]).replace(" ","").upper()])
