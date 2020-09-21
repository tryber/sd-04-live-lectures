function calculaDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

function calculaX(a, b, delta) {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);

  return { x1, x2 };
}

module.exports = { calculaDelta, calculaX };