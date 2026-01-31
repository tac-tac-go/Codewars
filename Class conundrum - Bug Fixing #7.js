class List {
  constructor(type) {
    this.type = type;
    this.items = [type];
    this.count = 0;
  }
  add(item) {
    if ( typeof item !== this.type )
      return `This item is not of type: ${this.type}`;
    this.items.push(item);
    this.count += 1
    return this;
  }
}
