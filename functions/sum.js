const sum = (num1, num2) => {
  console.log(typeof(num1));
  if (typeof(num1) === 'string' || typeof(num2) === 'string') return 'Números inválidos';
  return num1 + num2;
}

module.exports = sum;