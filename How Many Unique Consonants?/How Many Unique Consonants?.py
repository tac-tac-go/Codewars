import re
def count_consonants(text):
    text = re.sub(r'[^a-zA-Z]','',text).lower()
    return len(set(re.sub(r'[aiueo]','',text)))
