import re
def solution(full_text, search_text):
    return len(re.findall(f"{search_text}",full_text))
