const discoverOriginalPrice = (discountedPrice, salePercentage) => Math.round((discountedPrice/(1-(salePercentage/100)))*100)/100
