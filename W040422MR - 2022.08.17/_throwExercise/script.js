const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const addBtn = document.getElementById("add-btn");
const result = document.getElementById("result");

const people = [
  //   {
  //     name: "daniel",
  //     age: 28,
  //   },
];

function add(name, age) {
  // validation
  if (typeof name !== "string") {
    throw new Error("name must be of type string");
  }

  if (typeof age !== "number" || isNaN(age)) {
    throw new Error("age must be of type number");
  }

  if (name.length < 2) {
    throw new Error("name must be at least two characters long");
  }

  if (age < 0) {
    throw new Error("age cannot be negative");
  }

  if (age > 120) {
    throw new Error("age must be in sensible range");
  }

  if (age > 0 && age < 18) {
    throw new Error("age must be above or equal 18");
  }

  // process
  people.push({
    name,
    age,
  });
}

addBtn.addEventListener("click", addFromInputs);

function addFromInputs() {
  try {
    add(nameInput.value, Number(ageInput.value));
    result.innerHTML = render(people);
    clearInputs();
  } catch (err) {
    alert(err.message);
  }
}

function render(people) {
  let html = "<ul>";
  for (const p of people) {
    html += `<li>${p.name} (${p.age})</li>`;
  }
  html += "</ul>";

  return html;
}

function clearInputs() {
  nameInput.value = "";
  ageInput.value = "";
}
