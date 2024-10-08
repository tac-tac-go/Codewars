String bonusTime(int salary, bool bonus) {
  return bonus ? '\$${salary*10}' : '\$$salary' ;
}

