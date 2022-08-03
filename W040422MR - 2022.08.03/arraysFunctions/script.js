/** create new array */

console.log(new Array(1, 2, 3, 4, 5));
console.log([1, 2, 3, 4, 5]); // sugar syntax

console.log(new Array(8)); // create an array with 8 empty elements

/** convert ARRAY LIKE to an ARRAY */
// console.log(Array.from("SOME ARRAY LIKE VALUE"));
console.log(document.querySelectorAll(".hi"));
console.log(Array.from(document.querySelectorAll(".hi")));

/** fill all existing elements in array with a value */

console.log([0, 1, 2, 3, 4, 5, 6, 7, 8].fill(""));
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8].fill(null));
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8].fill("the value to fill", 4));
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8].fill("the value to fill", 4, 5));

/** change array */
const myArray = [0, 2, 3, 4, 5, 6, 7];

console.log("change array start", myArray);

/** push - add to end */
myArray.push("added");
console.log(myArray);
myArray.push("added 1", "added 2");
console.log(myArray);

/** unshift - add to start */
myArray.unshift("added");
console.log(myArray);
myArray.unshift("added 1", "added 2");
console.log(myArray);

/** pop - remove the last element and returns it */
console.log(myArray.pop());
console.log(myArray);

/** shift - remove the first element and returns it */
console.log(myArray.shift());
console.log(myArray);

function fill(arr, value, start, end) {}

console.log(fill([1, 2, 3, 4, 5], "a")); //['a', 'a', 'a', 'a', 'a']
console.log(fill([1, 2, 3, 4, 5], "a", 5)); // [1,2,3,4,5]
console.log(fill([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "a", 5)); // [1,2,3,4,5, 'a', 'a', 'a','a', 'a', 'a']
console.log(fill([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "a", 8)); // [1,2,3,4,5, 'a', 'a', 'a','a', 'a', 'a']
