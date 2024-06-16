function ghostBusters(building) {
  return /\s/g.test(building) ? building.replaceAll(" ","") : "You just wanted my autograph didn't you?" ;
}
