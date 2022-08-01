/** round numbers */

console.log(Math.ceil(5.2)); // 6
console.log(Math.ceil(5.5)); // 6
console.log(Math.ceil(5.6)); // 6

console.log(Math.floor(5.2)); // 5
console.log(Math.floor(5.5)); // 5
console.log(Math.floor(5.6)); // 5

console.log(Math.round(5.2)); // 5
console.log(Math.round(5.499999999)); // 5
console.log(Math.round(5.5)); // 6
console.log(Math.round(5.6)); // 6

/** maximum and minimum value */

console.log(Math.max(-45, 545, 2, 3, 0, 2199095, -539454, 33));
console.log(Math.min(-45, 545, 2, 3, 0, 2199095, -539454, 33));

/** random number between 0-1 (1 not inclusive) */
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(5, 10));
console.log(getRandomInt(5, 10));
console.log(getRandomInt(5, 10));
console.log(getRandomInt(5, 10));

const products = [
  {
    price: 731.2,
    discount: 72.3,
  },
];

for (const product of products) {
  const discount = (product.discount / 100) * product.price;
  console.log(discount);
  console.log(Math.round(discount));
}
