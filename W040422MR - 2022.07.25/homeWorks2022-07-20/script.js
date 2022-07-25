const person = {
  name: "daniel",
  email: "d@notmyrealmail.com",
  phone: "058666666:smiling_imp:",
  address: {
    city: "tlv",
    street: "not found",
    number: 666,
  },
  age: 23,
};

function objectToUl(obj) {
  let html = "<ul>";

  for (const key in person) {
    if (typeof obj[key] === "object") {
      html += `<li> ${key} => ${objectToUl(obj[key])}</li>`;
    } else {
      html += `<li> ${key} => ${obj[key]} </li>`;
    }
  }
  html += "</ul>";

  return html;
}

document.body.innerHTML = objectToUl(person);
