// get elements
const myInp = document.querySelector("#my-inp");
const checkBtn = document.getElementById("check");

// register events
// checkBtn.addEventListener("click", function () {
//   console.log("clicked");
// });

// checkBtn.addEventListener("click", onClickDo);
checkBtn.addEventListener("click", function () {
  if (checkDoesHaveBanana(myInp.value)) {
    alert("PAPAYA");
  }

  myInp.value = "";
});

// do something on page load

// functions
function checkDoesHaveBanana(txt) {
  const words = txt.split(" ");

  for (const word of words) {
    if (word.toLowerCase() === "banana") {
      return true;
    }
  }

  return false;
}
