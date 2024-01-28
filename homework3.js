//1.   Given an array. Determine whether it consists only from uniques or not.
function unique(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(unique([1, 2, 3, 4, 5, 6, 3]));
//2. Given an array of numbers. Find the sum of prime numbers.
function sumOfPrimeNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j != 0) {
          sum += arr[i];
        }
        break;
      }
    }
    if (arr[i] == 2) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 11, 2]));
//3.Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function largestProduct(arr) {
  let maxProduct = 1;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = arr[i] * arr[i + 1];
    if (product >= maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
console.log(largestProduct([1, 2, 5, 6, 1, 50, 2]));
//4. Given a sorted array and an element from that array. Find the index of that element using binary search.
function binarySearch(arr, e) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === e) return true;
    else if (arr[mid] < e) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
