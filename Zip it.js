Array.prototype.zip = function (arr, fn) {
 return this.slice(0, arr.length).map((val, idx) => fn(val, arr[idx]));
}
