def scrolling_text(text):
    rotate = lambda strg,n:strg[n:] + strg[:n]
    return [rotate(text,i).upper() for i in range(len(text))]
        
