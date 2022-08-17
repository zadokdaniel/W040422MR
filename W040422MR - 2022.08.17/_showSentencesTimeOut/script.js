const pageContainer = document.getElementById("page-container");
const newText = document.getElementById("new-text");

let currentParagraph = 0;
const paragraphs = pageContainer.innerText.split(".");

function showNextSentence() {
  const paragraph = paragraphs[currentParagraph];

  if (paragraph) {
    newText.innerHTML += paragraph;
    currentParagraph++;

    setTimeout(showNextSentence, 2000);
    // setTimeout(showNextSentence, paragraph.split(" ").length * 300);
  }
}

showNextSentence();
