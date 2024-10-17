function inPalindrome(str) {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  console.log(cleanedStr, reversedStr);
  return cleanedStr === reversedStr;
}
let string = "A man, a plan, a canal , panama";
let result = inPalindrome(string);
console.log(result);

let newString = "A man, a plan, a canal , panama";
let cleanedstring = newString.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
let reversedString = cleanedstring.split(" ").reverse().join(" ");
let newResult = cleanedstring === reversedString;
console.log(cleanedstring, reversedString, newResult);
