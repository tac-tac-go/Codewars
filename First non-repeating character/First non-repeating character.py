def first_non_repeating_letter(s):
    s_c = s.lower()
    for i,tmp in enumerate(s_c):
        if s_c.find(tmp)==s_c.rfind(tmp):
            return s[i]
    return ''
