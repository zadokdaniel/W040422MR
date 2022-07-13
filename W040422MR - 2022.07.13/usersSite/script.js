function siblingToString(kukurikuBoomBoom) {
  return kukurikuBoomBoom.name + " (" + kukurikuBoomBoom.age + ")";
}

const user = {
  profileImg:
    "https://cdn.pixabay.com/photo/2022/03/30/13/16/betta-7101167__340.jpg",
  name: "daniel",
  email: "d@gmail.com",
  age: 27,
  gender: "male",
  isAdmin: true,
  siblings: [
    {
      name: "shalom",
      age: 21,
    },
    {
      name: "lora",
      age: 54,
    },
  ],
};

// Option A

// const a = window.document.querySelector(".card");
// const img = a.children[0]
// img.alt = user.name + " profile";
// a.children[0].src = user.profileImg;

// Option B

const userCardContainer = window.document.getElementById("user-information");
userCardContainer.innerHTML =
  `
<div class="card" style="width: 18rem">
    <img
    src="` +
  user.profileImg +
  `"
    class="card-img-top"
    alt="` +
  user.name +
  ` profile"
    />
    <div class="card-body">
    <h5 class="card-title">` +
  user.name +
  `</h5>
    <p class="card-text">The user ` +
  user.name +
  ` is ` +
  user.age +
  ` years old, and ` +
  user.gender +
  `</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">` +
  siblingToString(user.siblings[0]) +
  `</li>
    <li class="list-group-item">` +
  siblingToString(user.siblings[1]) +
  `</li>

    <li class="list-group-item">` +
  user.siblings[1].name +
  ` (` +
  user.siblings[1].age +
  `)</li>
    </ul>
</div>
`;
