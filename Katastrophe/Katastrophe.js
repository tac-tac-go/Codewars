function strongEnough(earthquake, age) {
  let strength=1000;
  strength*=(0.99**age)
  earth = earthquake.map(arr => arr.reduce((a,b) => a+b,0)).reduce((a,b) => a*b);
  return strength>=earth ? "Safe!" : "Needs Reinforcement!"
}
