//1.String.prototype.concat()
function concatStrings(str1, str2) {
  let result = str1 + str2;
  return result;
}
console.log(concatStrings("Hello ", "World"));
//2.String.prototype.endsWith
function endsWith(string, endsWith) {
  if (endsWith.length > string.length) {
    return false;
  }
  for (let i = 0; i < endsWith.length; i++) {
    if (string[string.length - endsWith.length + i] !== endsWith[i]) {
      return false;
    }
  }

  return true;
}
console.log(endsWith("Hello", "lo"));
//3.String.prototype.lastIndexOf()
function lastIndexOf(string, word) {
  let lastIndex = -1;
  for (let i = 0; i <= string.length - word.length; i++) {
    let match = true;
    for (let j = 0; j < word.length; j++) {
      if (string[i + j] !== word[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      lastIndex = i;
    }
  }
  return lastIndex;
}
console.log(lastIndexOf("Hi there there!", "there"));
//4.String.prototype.repeat()
function repeat(string, count) {
  let result = string;
  for (let i = 1; i < count; i++) {
    result = result + " " + string;
  }
  return result;
}
console.log(repeat("hello", 4));
//5.String.prototype.replace()
function replace(string, toReplace, replacement) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let match = true;
    for (let j = 0; j < toReplace.length; j++) {
      if (string[i + j] !== toReplace[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      result += replacement;
      i += toReplace.length - 1;
    } else {
      result += string[i];
    }
  }

  return result;
}

console.log(replace("Hello World", "Hello", "Hi"));
//6.String.prototype.slice()
function slice(string, start = 0, end = string.length) {
  let result = "";
  if (start >= string.length) {
    return "";
  }
  if (start < 0) {
    start = start + string.length;
  }
  if (end <= start) {
    return "";
  }
  for (let i = start; i < end; i++) {
    result += string[i];
  }
  return result;
}
console.log(slice("Hello World", 0, 5));
//7.String.prototype.split()
function split(string, separator) {
  let result = [];
  let currentSubstring = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === separator) {
      result.push(currentSubstring);
      currentSubstring = "";
    } else {
      currentSubstring += inputString[i];
    }
  }
  result.push(currentSubstring);

  return result;
}

let inputString = "apple*orange*banana*grape";
console.log(split(inputString, "*"));
//8.String.prototype.startsWith()
function startsWith(string, search) {
  if (search.length > string.length) {
    return false;
  }
  for (let i = 0; i < search.length; i++) {
    if (string[i] !== search[i]) {
      return false;
    }
  }
  return true;
}
console.log(startsWith("Hello, World!", "Hello"));
//9.String.prototype.substring()
function substring(string, startIndex = 0, endIndex = string.length) {
  let result = "";
  if (startIndex == endIndex) {
    return "";
  }
  if (startIndex > endIndex) {
    let holder = startIndex;
    startIndex = endIndex;
    endIndex = holder;
  }
  for (let i = startIndex; i < endIndex; i++) {
    result += string[i];
  }

  return result;
}

console.log(substring("Hello, World!", 5, 3));
