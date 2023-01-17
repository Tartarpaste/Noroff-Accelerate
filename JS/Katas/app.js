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
