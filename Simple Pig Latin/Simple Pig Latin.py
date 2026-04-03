def pig_it(text):
    return " ".join([tmp[1:]+tmp[0]+"ay" if tmp not in ["!","?"] else tmp for tmp in text.split(" ")])
