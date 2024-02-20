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
