// JavaScript program to check whether a given number is even or odd
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log("Is the number 15 even or odd?");
console.log(checkEvenOdd(15));
