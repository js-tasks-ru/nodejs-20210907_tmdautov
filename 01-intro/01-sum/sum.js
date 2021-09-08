function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError();
  }
  return parseInt(a) + parseInt(b);
}

module.exports = sum;
