const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x, i) => i % 2 === 0);

const users = [
  {
    name: "daniel",
    age: 28,
    email: "zadok.dan@gmail.com",
  },
  {
    name: "shalom",
    age: 52,
    email: "shalom.shabazi@gmail.com",
  },
  {
    name: "tav",
    age: 3,
    email: "tav.prince@outlook.com",
  },
  {
    name: "kama",
    age: 22,
    email: "kama.ze@gmail.com",
  },
  {
    name: "tzuf",
    age: 8,
    email: "tzuf.dvash@hello.com",
  },
  {
    name: "David",
    age: 4,
    email: "david.dvash@hello.com",
  },
];

console.log(users.filter((user) => user.age > 18));

/** EXERCISE
 *
 * 1. how many are over 18 and how many are 18 or less
 * 2. filter only people who starts with the letter d
 * 3. filter only people who starts with the letter d and are over 18
 * 4. filter only people with an email form 'google'
 */

// 1
const over18 = users.filter((user) => user.age > 18).length;
console.log(`over18: ${over18}, 18 or less: ${users.length - over18}`);

// 2
console.log(users.filter((user) => user.name[0].toLowerCase() === "d"));
console.log(users.filter((user) => user.name.charAt(0).toLowerCase() === "d"));
console.log(
  users.filter((user) => user.name.startsWith("d") || user.name.startsWith("D"))
);
console.log(users.filter((user) => user.name.toLowerCase().startsWith("d")));

// 3
console.log(
  users.filter(
    (user) => user.name.toLocaleLowerCase().startsWith("d") && user.age > 18
  )
);

// 4
console.log(
  users.filter((user) => user.email.toLowerCase().endsWith("@gmail.com"))
);
console.log(
  users.filter((user) => user.email.toLowerCase().split("@")[1] === "gmail.com")
);

// HOW FILTER WORKS
// function filter(/*this*/ cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       result.push(this[i]);
//     }
//   }

//   return result;
// }

/********************* Array.prototype.map */
console.log("***** MAP");
console.log(
  users
    .map((user) => `<li>${user.name} (${user.age}) - ${user.email}</li>`)
    .join("")
);

let html = "";
for (const user of users) {
  html += `<li>${user.name} (${user.age}) - ${user.email}</li>`;
}
console.log(html);

console.log(users.map(() => {}));

console.log([232, 43, 45, 4554, 544].map((num) => num / 2));

// function map(/*this */ cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     const element = this[i];

//     result.push(cb(element, i, this));
//   }

//   return result;
// }

// Exercise

// 1. create array with numbers return array with all numbers powered 4
console.log([323, 23, 23, 43, 54, 43, 43, 432].map((x) => x ** 4));

// 2. return array with user's names only
console.log(users.map((user) => user.name));

// 3. show the users array inside a ul on DOM in the following format "daniel (35)"
document.getElementById("result").innerHTML = `
    <ul>
      ${users.map((user) => `<li>${user.name} (${user.age})</li>`).join("")} 
    </ul>`;

// 4. show only users which are over 18
document.getElementById("result").innerHTML = `
        <ul>
          ${users
            .filter((user) => user.age > 18)
            .map((user) => `<li>${user.name} (${user.age})</li>`)
            .join("")} 
        </ul>`;
