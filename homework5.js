// 1. Given a number. Write a recursive function that reverse the number. Return the new number.
function reverseNumber(num) {
  if (num < 10) {
    return num;
  }
  const lastDigit = num % 10;
  const remainingDigits = Math.floor(num / 10);
  return (
    lastDigit * Math.pow(10, reverseNumber(remainingDigits).toString().length) +
    reverseNumber(remainingDigits)
  );
}
console.log(reverseNumber(1312));
// 4 Given a string, compute recursively (no loops) a new string where all appearances of pi; have been replaced by 3.14;.
function replacePi(str) {
  if (str.length === 0 || !str.includes("pi")) {
    return str;
  }
  const index = str.indexOf("pi");
  const replacedStr =
    str.slice(0, index) + "3.14" + replacePi(str.slice(index + 2));

  return replacedStr;
}
//5. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
// 6. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.
function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  if (sum >= 10) {
    return sumOfDigits(sum);
  }

  return sum;
}
