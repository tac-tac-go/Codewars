import re
def reverse_alternate(st):
    return " ".join([s[::-1] if i%2==1 else s for i,s in enumerate(re.split(r'\s+',st.strip()))])
