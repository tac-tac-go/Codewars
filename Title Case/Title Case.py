def title_case(title, minor_words=''):
    minor_list = [s.lower() for s in minor_words.split(" ")]
    result = []
    for i,s in enumerate(title.split(" ")):
        s = s.lower()
        if i==0 or (s not in minor_list):
            result.append(s.title())
        else:
            result.append(s.lower())
    return " ".join(result)
