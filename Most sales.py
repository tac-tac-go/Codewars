def top3(products, amounts, prices):
    price = {}
    for i,j,k in zip(products, amounts, prices):
        price[i]=j*k
    return list(dict(sorted(price.items(),key=lambda x:-x[1])).keys())[:3]
