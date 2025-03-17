function getRandomCode() {
  // Generate a random number between 1 and 100
  let num = Math.floor(Math.random() * 100) + 1;
  
  // Return the code based on the number
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
