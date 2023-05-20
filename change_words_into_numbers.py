def change(text):
    text = text.split(" ")
    text = ["0" if i.lower()=="zero" else i for i in text]
    text = ["1" if i.lower()=="one" else i for i in text]
    text = ["2" if i.lower()=="two" else i for i in text]
    text = ["3" if i.lower()=="three" else i for i in text]
    text = ["4" if i.lower()=="four" else i for i in text]
    text = ["5" if i.lower()=="five" else i for i in text]
    text = ["6" if i.lower()=="six" else i for i in text]
    text = ["7" if i.lower()=="seven" else i for i in text]
    text = ["8" if i.lower()=="eight" else i for i in text]
    text = ["9" if i.lower()=="nine" else i for i in text]
    return " ".join(text)
    
