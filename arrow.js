const log = (param) => console.log(param);

log(
  "-----------------------------------X PRINT ODD NUMBERS IN ARRAY X----------------------------------------"
);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => {
  if (number % 2 !== 0) {
    log(number);
  }
});

log(
  "-----------------------------------X All the strings to title caps X----------------------------------------"
);

const convertToTitleCaseWithoutMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    arr[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return arr;
};
const stringArray = ["hello", "world", "javascript", "example"];
const titleCaseArray = convertToTitleCaseWithoutMap(stringArray);
log("Title Case Array:", titleCaseArray);

log(
  "-----------------------------------X sum of all numbers in an array X----------------------------------------"
);

const sumOfArrayWithoutMethods = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
};

const totalSum = sumOfArrayWithoutMethods(numbers);
console.log( totalSum);


log("-----------------------------------X Return palindromes in an array X----------------------------------------");

const words = ["level", "hello", "radar", "world", "deified"];
const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
};

const getPalindromesWithoutFilter = (arr) => {
  const palindromes = [];
  for (let i = 0; i < arr.length; i++) {
      if (isPalindrome(arr[i])) {
          palindromes.push(arr[i]);
      }
  }
  return palindromes;
};


const palindromeWords = getPalindromesWithoutFilter(words);
console.log( palindromeWords);

