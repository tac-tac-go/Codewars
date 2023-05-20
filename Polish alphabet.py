array = {
  'ą' : 'a',
  'ć' : 'c',
  'ę' : 'e',
  'ł' : 'l',
  'ń' : 'n',
  'ó' : 'o',
  'ś' : 's',
  'ź' : 'z',
  'ż' : 'z'
}

def correct_polish_letters(st): 
    result = ""
    for i in st:
        if i in array:
            result += array[i]
        else:
            result += i
    return result
   
