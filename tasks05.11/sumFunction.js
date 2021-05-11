function sum(...args) {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
