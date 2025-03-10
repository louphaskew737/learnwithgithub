let names = ["Alice", "Bob", "Charlie"];

function greet(name) {
  return `Hello, ${name}!`;
}

greet(names[Math.floor(Math.random() * names.length)]);
