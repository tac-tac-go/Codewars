def usd(eur):
    from decimal import Decimal, ROUND_HALF_UP
    y = Decimal(str(eur*1.1363636))
    a = y.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
    return "$"+str(a)
