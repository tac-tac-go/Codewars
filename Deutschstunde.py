import re
def der_die_das(wort):
    count_vowel = len(re.findall(r'[aiueoäöü]', wort, re.IGNORECASE))
    if count_vowel<2:return f'das {wort}'
    elif count_vowel<4:return f'die {wort}'
    else:return f'der {wort}'
