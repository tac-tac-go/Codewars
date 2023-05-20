def fake_bin(x):
    return "".join(["1" if int(i)>=5 else "0" for i in str(x)])
