const factorialize = (n) => {
  if(n === 0) return 1;
  return n * factorialize(n - 1);
};

module.exports = factorialize;
