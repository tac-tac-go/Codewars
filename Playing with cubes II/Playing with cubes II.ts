export class Cube {
  private _side: number;
  constructor(_side=0){
    this._side = _side;
  }

  public getSide(): number {
    return Math.abs(this._side);
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }
}
