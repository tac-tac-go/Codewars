import string
def alphanumeric(password):
    if password=='':return False
    return all([tmp in list(string.ascii_letters)+list(map(lambda x:str(x),range(0,10))) for tmp in password])
