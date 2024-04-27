key = {"no":0,"pa":1,"re":2,"ci":3,"vo":4,"mu":5,"xa":6,"ze":7,"bi":8,"so":9}
def convert_lojban(lojban):
    result = ""
    for i in range(0,len(lojban),2):
        result+=str(key[lojban[i:i+2]])
    return int(result)
    
