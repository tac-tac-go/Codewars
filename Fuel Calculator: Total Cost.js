function fuelPrice(litres, price_per_litre) {
  if (litres >= 2 && litres < 4) {
    return Math.round((litres * price_per_litre - (0.05 * litres))*100)/100
} else if (litres >= 4 && litres < 6) {
    return Math.round((litres * price_per_litre - (0.1 * litres))*100)/100
} else if (litres >= 6 && litres < 8) {
    return Math.round((litres * price_per_litre - (0.15 * litres))*100)/100
} else if (litres >= 8 && litres < 10) {
    return Math.round((litres * price_per_litre - (0.2 * litres))*100)/100
} else if (litres >= 10) {
    return Math.round((litres * price_per_litre - (0.25 * litres))*100)/100
}
}
