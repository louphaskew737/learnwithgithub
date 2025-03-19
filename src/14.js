function getRandomCode() {
  const codes = ["return Math.random() * 10;", "console.log('Hello World');"];
  return codes[Math.floor(Math.random() * codes.length)];
}
