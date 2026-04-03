import re
def generate_hashtag(s):
    result = "#"+"".join([tmp.title() for tmp in re.sub(r'\s{2,}'," ",s).split(" ")])
    return False if len(result)>140 or result=='#' else result
 
