const getRandomCode = () => {
  const codes = ['HTML', 'CSS', 'JavaScript'];
  return codes[Math.floor(Math.random() * codes.length)];
};

console.log(getRandomCode());
