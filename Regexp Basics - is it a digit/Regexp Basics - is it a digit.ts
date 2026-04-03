interface String {    // Necessary, keep it here.
  digit(): boolean;
}

String.prototype.digit = function(): boolean {
  return this.match(/^[0-9]$/g) ? true : false;
};

