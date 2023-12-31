String.prototype.toJadenCase = function () {
  return this.split(" ").map(v => v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join(" ")
}


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
}

