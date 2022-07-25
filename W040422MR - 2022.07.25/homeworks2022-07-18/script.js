const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const colorInput = document.getElementById("color");
const countryInput = document.getElementById("country");
const genderMaleInput = document.getElementById("gender-male");
const genderFemaleInput = document.getElementById("gender-female");

const cardsContainer = document.getElementById("cards-container");
const alertContainer = document.getElementById("alert-container");

clearInputs();

function clearInputs() {
  nameInput.value = "";
  ageInput.value = "";
  colorInput.value = "#7A8AFF";
  countryInput.value = "";
  genderFemaleInput.checked = undefined;
  genderMaleInput.checked = undefined;
}

function getUserInformationFromInputs() {
  let gender;

  if (genderMaleInput.checked) {
    gender = genderMaleInput.value;
  } else if (genderFemaleInput.checked) {
    gender = genderFemaleInput.value;
  }

  return {
    name: nameInput.value,
    age: ageInput.value,
    color: colorInput.value,
    country: countryInput.value,
    // gender: gender,
    gender,
  };
}

function renderCard(user) {
  return `   <div class="card m-2" style="background-color: ${user.color}">
    <div class="card-header">${user.name} (${user.gender})</div>
    <div class="card-body">
      <h5 class="card-title">Is ${user.age} years old</h5>
      <p class="card-text">From ${user.country}</p>
    </div>
  </div>`;
}

function validateUser(user) {
  if (user.name.length < 2) {
    return "user name must be at least two characters long";
  } else if (user.name.length > 50) {
    return "user name must be less than 50 charcters";
  }

  if (user.age > 120) {
    return "are you metushelach?";
  }

  return "";
}

function showError(error) {
  alertContainer.innerHTML = `<div class="alert alert-warning">${error}</div>`;
}

function clearError() {
  alertContainer.innerHTML = "";
}

function submitInputs() {
  const userInformation = getUserInformationFromInputs();

  const error = validateUser(userInformation);
  if (error.length > 0) {
    showError(error);
    return;
  }

  cardsContainer.innerHTML += renderCard(userInformation);
  clearInputs();
}
