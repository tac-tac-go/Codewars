def is_ruby_coming(lst): 
    lst = list(filter(lambda x:x=='Ruby' ,[i['language'] for i in lst]))
    return len(lst)>0
