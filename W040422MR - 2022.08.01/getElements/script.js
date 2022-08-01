console.log(document.getElementById("some-elements-id")); // null if not found HTMLElement if found
console.log(document.getElementsByClassName("a")); // HTMLCollection (array like)
console.log(document.getElementsByTagName("div")); // HTMLCollection (array like)

console.log(document.querySelector("div")); // null if not found HTMLElement of the FIRST if found
console.log(document.querySelector("div.hello")); // null if not found HTMLElement of the FIRST if found
console.log(document.querySelector("div.bye")); // null if not found HTMLElement of the FIRST if found
console.log(document.querySelector("input[type=text]")); // null if not found HTMLElement of the FIRST if found
console.log(document.querySelector("#my")); // null if not found HTMLElement of the FIRST if found

console.log(document.querySelectorAll("input[type=text]")); // NodeList (array like)
console.log(document.querySelectorAll("input[type=text]:nth-child(even)")); // NodeList (array like)
console.log(document.querySelectorAll("div div.hello")); // NodeList (array like)
console.log(document.querySelectorAll("#hello")); // NodeList (array like)
