def sponge_meme( s ):
    return "".join([v.upper() if (i+1)%2==1 else  v.lower() for i,v in enumerate(s)])
                
        
    
