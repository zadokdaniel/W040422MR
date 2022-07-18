const inputsContainer = document.getElementById("inputs-container");

const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const favoriteColorInput = document.getElementById("favorite-color-input");

const userInfo = document.getElementById("user-info");

function setInputsContainerBackgroundColor(color) {
  inputsContainer.style.backgroundColor = color;
}

function setUserInformation(name, age) {
  userInfo.innerHTML = name + " (" + age + ")";
}

function clearInputs() {
  nameInput.value = "";
  ageInput.value = "";
  favoriteColorInput.value = "#000";
}

function handleInputsSubmit() {
  setInputsContainerBackgroundColor(favoriteColorInput.value);
  setUserInformation(nameInput.value, ageInput.value);
  clearInputs();
}

/*

function handleInputsSubmit() {
  // get the values of the inputs
  console.log(nameInput.value, ageInput.value, favoriteColorInput.value);

  // change #inputs-container to background according to favorite-color value
  //   inputsContainer.style.backgroundColor = favoriteColorInput.value;
  setInputsContainerBackgroundColor(favoriteColorInput.value);

  // insert into #user-info the "name (age)"
  //   userInfo.innerHTML = nameInput.value + " (" + ageInput.value + ")";
  setUserInformation(nameInput.value, ageInput.value);

  // clear inputs value
  //   nameInput.value = "";
  //   ageInput.value = "";
  //   favoriteColorInput.value = "#000";
  clearInputs();
}

*/
