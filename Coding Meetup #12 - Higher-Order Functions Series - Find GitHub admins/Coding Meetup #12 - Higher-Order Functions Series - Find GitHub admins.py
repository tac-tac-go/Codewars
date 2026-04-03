def find_admin(lst, lang): 
    return [obj for obj in lst if obj['githubAdmin']=="yes" and obj['language']==lang]
