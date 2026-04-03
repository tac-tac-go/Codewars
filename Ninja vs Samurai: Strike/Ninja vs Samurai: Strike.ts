export class Warrior{
  constructor(private name:string, public health=100){}
  strike(enemy:Warrior, swings:number){
      enemy.health = Math.max(0, enemy.health - (swings * 10));
  }
}
