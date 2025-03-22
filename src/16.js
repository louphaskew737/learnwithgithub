function getRandomInt(max) {
  Math.random();
  return Math.floor(Math.random() * max);
}

// Example usage:

const numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);
