def replace_nth(text, n, old_value, new_value):
    if n<=0:
        return text
    count = 0
    text_a = list(text)
    for i,s in enumerate(text):
        if s == old_value:
            count+=1
            if count%n==0:
                text_a[i]=new_value
    return "".join(text_a)
                
        
            
        
