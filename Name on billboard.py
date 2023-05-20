def billboard(name, price=30):
    result = 0
    for i in range(len(name)):
        result += price
    return result
