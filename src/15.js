function getRandomJSCode() {
  let code = `
    const numbers = [1, 2, 3, 4, 5];
    
    // Filter out even numbers
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    
    console.log(oddNumbers);
  `;
  
  return code;
}
