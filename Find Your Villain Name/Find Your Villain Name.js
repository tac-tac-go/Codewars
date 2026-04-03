function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const day = parseInt(String(birthday.getDate()).slice(-1));
  const month = birthday.getMonth();
  if(month==10 && day==18){
    return "The Terrifying Teaspoon"
  }else{
    return `The ${m[month]} ${d[day]}`
  }
}
