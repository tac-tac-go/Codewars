import re
def is_flush(cards):
    pattern = re.compile(r'([2-9JQKA]|10)(\w)')
    return len(list(set([pattern.search(tmp).group(2) for tmp in cards])))==1
    
    
