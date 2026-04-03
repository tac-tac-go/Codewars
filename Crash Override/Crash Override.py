def alias_gen(f_name, l_name):
    f_g = FIRST_NAME.get(f_name[0].upper(),0)
    l_g = SURNAME.get(l_name[0].upper(),0)
    return f_g+" "+l_g  if f_g!=0 and l_g!=0 else 'Your name must start with a letter from A - Z.'

