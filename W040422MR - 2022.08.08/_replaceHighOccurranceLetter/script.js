// get elements
const myInp = document.querySelector("#my-inp");
const checkBtn = document.getElementById("check");
const result = document.getElementById("result");

checkBtn.addEventListener("click", replaceHighOccurrenceLetter);

function replaceHighOccurrenceLetter() {
  const maxLetter = findMostOccurredLetter(myInp.value);
  result.innerHTML = myInp.value.replaceAll(maxLetter.letter, "😎");
}

function findMostOccurredLetter(str) {
  const letterCounter = {};

  for (const letter of str) {
    // if (letterCounter[letter]) {
    //   letterCounter[letter]++;
    // } else {
    //   letterCounter[letter] = 1;
    // }

    letterCounter[letter] = letterCounter[letter]
      ? letterCounter[letter] + 1
      : 1;
  }

  let max = {
    letter: null,
    counter: 0,
  };
  for (const letter in letterCounter) {
    if (letterCounter[letter] > max.counter) {
      max.counter = letterCounter[letter];
      max.letter = letter;
    }
  }

  return max;
}


