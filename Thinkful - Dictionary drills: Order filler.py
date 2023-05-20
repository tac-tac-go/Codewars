def fillable(stock, merch, n):
    try:
        if stock[merch] >=n:
            return True
        return False
    except:
        return False
