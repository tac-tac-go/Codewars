import re
def get_count(words=''):
    dic = {'vowels':0,'consonants':0}
    if type(words)==str:
        words = re.sub(r'[^a-zA-Z]',"",words)
        print(words)
        for word in words.lower():
            if word in ['a','i','u','e','o']:
                dic['vowels']+=1
            else:
                dic['consonants']+=1
        return dic
    else:
        return dic
