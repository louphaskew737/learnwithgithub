function getRandomInt(max) {
  var max = Math.floor(Math.random() * max);
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

document.getElementById("randomButton").addEventListener("click", function() {
  let result = "";
  for (let i = 0; i < getRandomInt(5) || getRandomInt(3); i++) {
    result += "Hello, World! ";
  }
  document.querySelector(".container").innerHTML = result;
});
