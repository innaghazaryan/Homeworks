// 1. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.
function invertObject(originalObject) {
  const invertedObject = {};

  for (const key in originalObject) {
    const value = originalObject[key];

    if (invertedObject[value] === undefined) {
      invertedObject[value] = key;
    } else if (typeof invertedObject[value] === "string") {
      invertedObject[value] = [invertedObject[value], key];
    } else {
      invertedObject[value].push(key);
    }
  }

  return invertedObject;
}
const originalObject = { a: "1", b: "2", c: "2", d: "2" };
const invertedResult = invertObject(originalObject);

console.log(invertedResult);

//2. Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
  const keys1 = [];
  for (const key in obj1) {
    keys1.push(key);
  }
  const keys2 = [];
  for (const key in obj2) {
    keys2.push(key);
  }
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const a = { a: "1" };
const b = { a: "1" };

console.log(shallowCompare(a, b));

const c = { a: "1" };
const d = { a: "1", b: "2" };

console.log(shallowCompare(c, d));

//3. Check whether string is palindrome, or not.
function isPalindrome(str) {
  let givenString = str.toLowerCase();
  let replacedString = "";
  for (let i = givenString.length - 1; i >= 0; i--) {
    replacedString += givenString[i];
  }
  if (givenString === replacedString) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("Abba"));

//4. Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function sequence(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  let newArr = [];
  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }
  return newArr;
}
let arr = [5, 10, 8, 6, 2];
console.log(sequence(arr));

//5. Given an array and element. Check if that element exists in array.

function isElementExists(arr, e) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      return true;
    }
  }
  return false;
}
let arr2 = [1, 2, 3, 4, 5, 6];
let e = 5;
console.log(isElementExists(arr2, e));
