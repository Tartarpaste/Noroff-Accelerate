/*
function teamFinalScore(x) {
  let twoPointer = 2 * 3;
  let threePointer = 3 * 3;
  let finalscore = twoPointer + threePointer;
  console.log(finalscore);
}
*/

function splitOnDoubleLetter(word) {
  let splitWord = [];
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      splitWord.push(word.slice(0, i + 1));
      word = word.slice(i + 1);
      i = -1;
    }
  }
  if (splitWord.length > 0) {
    splitWord.push(word);
  }
  return splitWord;
}
