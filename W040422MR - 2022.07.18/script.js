// const inputsContainer = document.getElementById("inputs-container");

// const nameInput = document.getElementById("name-input");
// const ageInput = document.getElementById("age-input");
// const favoriteColorInput = document.getElementById("favorite-color-input");

// const userInfo = document.getElementById("user-info");

// function handleInputsSubmit() {
//   if (nameInput.value === "") {
//     return;
//   } else {
//     console.log("hello");
//   }
// }

if (5 !== 5) {
  console.log("true");
} else {
  console.log("false");
}

if (5 === 5) {
  console.log("do something");
}

function handleInputsSubmit() {
  let age = document.getElementById("age-input").value;

  // Example 1
  if (age < 0) {
    console.log("you were not born yet");
  } else {
    if (age < 20) {
      console.log("is'nt it a school day?");
    } else {
      if (age < 100) {
        console.log("work hard before you die");
      } else {
        if (age < 120) {
          console.log("I hope you enjoyed life");
        } else {
          console.log("wow you beat the record");
        }
      }
    }
  }

  // Example 2 - because in each else there's only one command which is an if. we omit the {} so it will be clearer
  if (age < 0) {
    console.log("you were not born yet");
  } else if (age < 20) {
    console.log("is'nt it a school day?");
  } else if (age < 100) {
    console.log("work hard before you die");
  } else if (age < 120) {
    console.log("I hope you enjoyed life");
  } else {
    console.log("wow you beat the record");
  }

  // Example 3 - early return
  if (age < 0) {
    console.log("you were not born yet");
    return;
  }

  if (age < 20) {
    console.log("is'nt it a school day?");
    return;
  }

  if (age < 100) {
    console.log("work hard before you die");
    return;
  }

  if (age < 120) {
    console.log("I hope you enjoyed life");
    return;
  }

  console.log("wow you beat the record");
}

if (5 === 5) console.log("hello");
console.log("bye");
