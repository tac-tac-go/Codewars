import re
def remove(st):
    return " ".join([re.sub("!+$", '',s) for s in st.split(" ")])
    
