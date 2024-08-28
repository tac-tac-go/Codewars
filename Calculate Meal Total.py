def calculate_total(subtotal, tax, tip):
    result = subtotal + (subtotal/100)*tax + (subtotal/100)*tip
    return round(result,2)
