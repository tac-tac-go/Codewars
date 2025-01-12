def dashatize(n):
    return "".join([f'-{i}-' if int(i)%2==1 else i for i in str(abs(n))]).replace("--","-").strip("-")
