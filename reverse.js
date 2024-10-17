function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}
let array = [5, 4, 3, 2, 8, 2, 3, 4, 5, 6];
let reversedArray = reverseArray(array);
console.log("Reversed Array :", reversedArray);
