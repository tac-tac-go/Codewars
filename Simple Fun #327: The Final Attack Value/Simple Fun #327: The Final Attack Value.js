const gcd = (a, b) => {
    if (b === 0)return a;
    return gcd(b, a % b);
};

function finalAttackValue(x,monsterList){
  let attack = x
  for(let tmp of monsterList){
    if(attack >=tmp)attack+=tmp
    else attack+=gcd(attack,tmp)
  }
  return attack
}
