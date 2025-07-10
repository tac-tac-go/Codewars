function scheme(cmd) {
  let [ op, ...args ] = cmd.slice(1, -1).split(' ');
  args = args.map(Number);
  switch (op) {
      case '+': return args.reduce((a, b) => a + b, 0);
      case '-': return !args.length ? 0 : args.reduce((a, b) => a - b);
      case '*': return args.reduce((a, b) => a * b, 1);
      case '/': return args.reduce((a, b) => a / b);
  }
}
