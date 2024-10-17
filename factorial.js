function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return (num = num * factorial(num - 1));
  }
}

var number = +prompt("Enter the number:");
let factorialNumber = factorial(number);

console.log(`factorial of ${number} is ${factorialNumber}`);
