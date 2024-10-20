function countVowels(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let string = "My Name is Akhilesh Rana";
let vowelsCount = countVowels(string);
console.log(`Numbers of vowels in ${string} is ${vowelsCount}`);
