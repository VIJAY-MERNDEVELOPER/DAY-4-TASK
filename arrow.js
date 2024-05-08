const log = (param) => console.log(param);

log(
  "-----------------------------------X PRINT ODD NUMBERS IN ARRAY X----------------------------------------"
);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNum = [];
const printOdd = (arr) => {
  arr.forEach((number) => {
    if (number % 2 !== 0) {
      oddNum.push(number);
    }
  });
  log(oddNum);
};
printOdd(numbers);

log(
  "-----------------------------------X All the strings to title caps X----------------------------------------"
);
const changedArray = [];
const titleCaseArray = [];
const convertToTitleCaseWithoutMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const words = arr[i].split(" ");
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
};
const stringArray = ["hello world", "javascript", "example"];

log("Title Case Array:", convertToTitleCaseWithoutMap(stringArray));

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
console.log(totalSum);

log(
  "-----------------------------------X Return all the prime numbers in an array X----------------------------------------"
);

const arrayList = [2, 7, 4, 5, 3, 8, 9, 10, 11, 23];
let isPrime;
const primArray = [];
const findPrimeNumber = (arr) => {
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
};
findPrimeNumber(arrayList);

log(
  "-----------------------------------X Return palindromes in an array X----------------------------------------"
);

const words = ["level", "hello", "radar", "world", "deified"];
const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  const reversed = cleanStr.split("").reverse().join("");
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
console.log(palindromeWords);
