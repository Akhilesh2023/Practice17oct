function sumArray(num) {
  sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
const arr = [10, 20, 3, 4, 5, 6, 7, 8, 9, 10];
let total = sumArray(arr);
console.log(`sum of the number is ${total}`);
