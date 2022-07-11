/*
1. create a new project 
2. inside the html insert a div
3. using js change the div's inner html <button>hello</button>
4. using js change the div's background to lightcoral
5. raise hand
6. inside another div show the user the amount of pages in his browser's history
*/

const forButton = window.document.getElementById("for-button");

forButton.innerHTML = "<button>hello</button>";
forButton.children["0"].style.backgroundColor = "blue";

// console.log(forButton.children["0"]);
forButton.children["0"].innerHTML = "changed";
forButton.style.backgroundColor = "lightcoral";

window.document.getElementById("for-location").innerHTML =
  window.history.length;
