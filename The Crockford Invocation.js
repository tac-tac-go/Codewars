const add = (a) => (b) => a+b
const subtract = (a) => (b) => a-b
const multiply = (a) => (b) => a*b
const apply = (fn) => (a) => (b) => fn(a)(b)
