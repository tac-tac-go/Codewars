def sc(n: int) -> str:
    if n<=1:
        return ""
    elif n <7:
        return "Aa~ "*(n-1)+"Pa! Aa!"
    else:
        return "Aa~ "*(n-1)+"Pa!"
