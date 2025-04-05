function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(getRandomInt(50) + " and the Fibonacci sequence: ");
console.log(fibonacci(8));
