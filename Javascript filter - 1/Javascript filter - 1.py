import re
def search_names(logins):
    return list(filter(lambda x:re.search('_$',x[0]),logins))
