const getRandomNumber = () => Math.floor(Math.random() * 10);
const numbers = [];
for (let i = 0; i < 5; i++) {
  const number = getRandomNumber();
  if (!numbers.includes(number)) {
    numbers.push(number);
  } else {
    i--;
  }
}
return numbers;
