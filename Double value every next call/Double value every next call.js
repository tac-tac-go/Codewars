class Class {
  static count = 1;
  static getNumber() {
    const val = Class.count;
    Class.count *= 2
    return val;
  }
}
