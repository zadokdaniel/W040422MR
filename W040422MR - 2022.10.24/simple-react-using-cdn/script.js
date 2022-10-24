const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { style: { color: "red" } }, "hello"),
    React.createElement("p", null, "hello from paragraph"),
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg",
      alt: "helmet is important",
      onClick: () => {
        alert("clicked");
      },
    })
  );
}

function B() {
  return React.createElement("div", null, "hello");
}

console.log(B());

function A() {
  return React.createElement(
    "div",
    null,
    React.createElement(B),
    React.createElement(B),
    React.createElement(B),
    React.createElement(B),
    React.createElement(B)
  );
}

console.log(React.createElement(B));

// root.render(React.createElement(App, null));
root.render(React.createElement(A, null));

// function createFirstPage() {
//   const div = document.createElement("div");

//   const h1 = document.createElement("h1");
//   h1.style.color = "red";
//   h1.innerHTML = "hello";

//   const p = document.createElement("p");
//   p.innerHTML = "hello";

//   const img = document.createElement("img");
//   img.src =
//     "https://cdn.pixabay.com/photo/2022/10/16/13/53/early-morning-7525151_960_720.jpg";
//   img.alt = "helmet is important";
//   img.addEventListener("click", () => {
//     alert("clicked");
//   });

//   div.appendChild(h1);
//   div.appendChild(p);
//   div.appendChild(img);
// }
