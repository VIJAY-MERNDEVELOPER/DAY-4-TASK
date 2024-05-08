const log = (param) => console.log(param);

log(
  "-----------------------------------X PRINT ODD NUMBERS IN ARRAY X----------------------------------------"
);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

(function () {
  const oddNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddNum.push(arr[i]);
    }
  }
  log(oddNum);
})();

log(
  "-----------------------------------X All the strings to title caps X----------------------------------------"
);

const array = ["hello world", "title case"];
const titleCaseArray = [];
(function () {
  for (let i = 0; i < array.length; i++) {
    const words = array[i].split(" ");
    const titleCaseWords = [];

    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      titleCaseWords.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    }

    titleCaseArray.push(titleCaseWords.join(" "));
  }

  log(titleCaseArray);
})();

log(
  "-----------------------------------X sum of all numbers in an array X----------------------------------------"
);

const num = [12, 33, 55, 15, 78];
(function () {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  log(sum);
})();

log(
  "-----------------------------------X Return palindromes in an array X----------------------------------------"
);

const words = ["level", "hello", "radar", "world", "deified"];

(function (arr) {
  const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
    const reversed = cleanStr.split("").reverse().join("");
    return cleanStr === reversed;
  };

  const palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i])) {
      palindromes.push(arr[i]);
    }
  }

  log(palindromes);
})(words);

log(
  "-----------------------------------X Return median of two sorted in an array X----------------------------------------"
);

let arr1 = [5, 6, 8, 35];
let arr2 = [24, 5, 4, 2, 35];

const median = (function () {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  log(mergedArray);
  if (mergedArray.length % 2 == 0) {
    const num1 = mergedArray.length / 2;
    const num2 = num1 - 1;
    const medianValue = (mergedArray[num1] + mergedArray[num2]) / 2;
    return `median of array is ${medianValue}`;
  } else {
    const num = Math.round(mergedArray.length / 2 - 1);

    return `median of array is ${mergedArray[num]}`;
  }
})();
log(median);

log(
  "-----------------------------------X Return prime number in an array X----------------------------------------"
);

const arr3 = [2, 7, 4, 5, 3, 8, 9, 10, 11];
let isPrime;
const primArray = [];
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 2) {
      isPrime = false;
    }
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
        break;
      }

      isPrime = true;
    }
    if (isPrime === true) {
      primArray.push(arr[i]);
    }
  }
  log(primArray);
})(arr3);

log(
  "-----------------------------------X Rotate an array by k times X----------------------------------------"
);
const array1 = [1, 2, 3, 4, 5];

(function (arr, k) {
  const len = arr.length;
  const rotations = k % len;
  log(`rotations-${rotations}`);
  for (let i = 0; i < rotations; i++) {
    const temp = arr.pop();
    arr.unshift(temp);
  }
  log(arr);
})(array1, 2);

log(
  "-----------------------------------X Remove duplicates from an array X----------------------------------------"
);

const duplicateArray = [1, 2, 3, 3, 1, 5, 7, 9];

(function (arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = index; j < arr.length; j++) {
      if (index !== j) {
        if (arr[index] === arr[j]) {
          arr.splice(j, 1);
        }
      }
    }
  }
  log(arr);
})(duplicateArray);
