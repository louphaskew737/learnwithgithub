async function getRandomCode() {
  const codes = ['abc', 'def', 'ghi', 'jkl', 'mno'];
  const randomIndex = Math.floor(Math.random() * codes.length);
  return codes[randomIndex];
}
