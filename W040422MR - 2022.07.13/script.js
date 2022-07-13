const input = document.getElementById("input");
const sendBtn = document.getElementById("send-btn");
const list = document.getElementById("list");

function addToList() {
  const userInput = input.value;
  list.innerHTML = list.innerHTML + "<li>" + userInput + "</li>";
}
