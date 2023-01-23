function getDays() {
  const date1 = new Date("January 12, 1997");
  const date2 = new Date("January 23, 2086");
  let date1Ms = date1.getTime();
  let date2Ms = date2.getTime();

  let differenceInMs = date2Ms - date1Ms;

  return Math.round(differenceInMs / 1000 / 60 / 60 / 24);
}

/* function correctTitle1(title) {
  title = title.replace(",", ", ").replace(/\s+/g, " ");
  let excludedWord = ["and", "the", "of", "in"];
  let titleArray = title.split(" ");
  let newTitleArray = [];
  for (let i = 0; i < titleArray.length; i++) {
    let word = titleArray[i];
    let newWord = "";
    if (excludedWord.includes(word.toLowerCase())) {
      newWord = word.toLowerCase();
    } else {
      newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    newTitleArray.push(newWord);
  }
  let newTitle = newTitleArray.join(" ");
  if (newTitle[newTitle.length - 1] !== ".") {
    newTitle = newTitle + ".";
  }
  return newTitle;
} */

/*
const inputArray1 = document.getElementById("input-array");
const inputArray2 = document.getElementById("input-array-2");
const btnComputeArray1 = document.getElementById("btn-compute-array");
const btnComputeArray2 = document.getElementById("btn-compute-array-2");
const hArrayLength1 = document.getElementById("h7-array-length");
const hArrayLength2 = document.getElementById("h7-array-length-2");

function countBoomerangs(array) {
  let amountOfBoomerangs = 0;
  array = inputArray1.value;
  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] === array[i + 2] && array[i] !== array[i + 1]) {
      amountOfBoomerangs++;
    }
  }
  hArrayLength1.innerText = amountOfBoomerangs;
  return amountOfBoomerangs;
}

const arrayLenght = (array) => (array = inputArray2.value);
let count = array.flat(Infinity).length;
hArrayLength2.innerText = count;

btnComputeArray2.addEventListener("click", arrayLenght);
btnComputeArray1.addEventListener("click", countBoomerangs);
*/

/*
const inputArray = document.getElementById("input-array");
const btnComputeArray = document.getElementById("btn-compute-array");
const hArrayLength = document.getElementById("h7-array-length");

function calculateArray() {
  let inputField = document.getElementById("input-array");
  let inputValue = inputField.value;
  hArrayLength.innerText = inputValue.flat(Infinity).length;
}

const arrayLenght = (array) => array.flat(Infinity).length;

btnComputeArray.addEventListener("click", calculateArray);
*/

/*
function teamFinalScore(x) {
  let twoPointer = 2 * 3;
  let threePointer = 3 * 3;
  let finalscore = twoPointer + threePointer;
  console.log(finalscore);
}
*/

/*
function splitOnDoubleLetter(word) {
  let wordArray = [];
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      wordArray.push(word.slice(0, i + 1));
      word = word.slice(i + 1);
      i = -1;
    }
  }
  if (wordArray.length > 0) {
    wordArray.push(word);
  }
  return wordArray;
}
*/
