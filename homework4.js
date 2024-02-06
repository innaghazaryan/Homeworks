function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
}
console.log(find([1, 2, 3, "a", "b", 4, 5], (e) => e == "l"));
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filter([1, 2, 3, 4, 5], (num) => num % 2 === 0));
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
console.log(map([1, 2, 3, 4, 5], (e) => e * e));
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;
}
console.log(every([4, 5, 6, 7, 8], (e) => e > 3));
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }
  return false;
}
console.log(some([1, 2, 3, 4], (e) => e == 3));

function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex([1, 2, 3, 4, 5], (e) => e == 3));
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
