function milkPrice(litres, pricePerLitre) {
  let result = 0;
  let litres_r = litres;
  let down = pricePerLitre;
  for(let i =0;i<Math.floor(litres/2);i++){
    down = pricePerLitre - 0.05*(i+1)
    result+= down*2
    litres_r-=2
  }
  return Math.round((result+litres_r*down)*100)/100
}
