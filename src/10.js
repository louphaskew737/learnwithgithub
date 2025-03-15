// Generate a random JS code snippet
const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate a random string of letters and numbers
const generateRandomString = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let string = "";
  for (let i = 0; i < 10; i++) {
    string += chars[randomInt(0, chars.length)];
  }
  return string;
};

// Generate a random number between min and max
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate a random date between two dates
const generateRandomDate = (start, end) => {
  const minTime = start.getTime();
  const maxTime = end.getTime();
  return new Date(randomInt(minTime, maxTime));
};
