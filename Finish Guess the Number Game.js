class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if(this.lives <=0){
      throw exception;
    }
    if(this.number==n){
      return n
    }else{
      this.lives-=1
      return false
    }
  }
}
