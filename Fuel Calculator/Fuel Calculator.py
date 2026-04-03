def fuel_price(litres, price_per_litre):
    if litres >=2 and litres<4:
        return litres*price_per_litre-(0.05*litres)
    elif litres >=4 and litres<6:
        return litres*price_per_litre-(0.1*litres)
    elif litres >=6 and litres<8:
        return litres*price_per_litre-(0.15*litres)
    elif litres >=8 and litres<10:
        return litres*price_per_litre-(0.2*litres)
    elif litres >=10:
        return litres*price_per_litre-(0.25*litres)
