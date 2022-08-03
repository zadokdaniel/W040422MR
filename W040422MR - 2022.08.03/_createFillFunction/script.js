function fill(arr, value, start, end) {
  if (!start) {
    start = 0;
  }

  if (!end) {
    end = arr.length;
  }

  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
}

const arr1 = ["🍎", "🍏", "🪃", "⚠️"];
const arr2 = ["🍎", "🍏", "🪃", "⚠️"];
const arr3 = ["🍎", "🍏", "🪃", "⚠️"];
const arr4 = ["🍎", "🍏", "🪃", "⚠️"];
const arr5 = ["🍎", "🍏", "🪃", "⚠️"];
const arr6 = ["🍎", "🍏", "🪃", "⚠️"];

console.log(1, fill(arr1, "replaced 1")); // array with 4 times "replaced"
console.log(2, fill(arr2, "replaced 2", 2));
console.log(3, fill(arr3, "replaced 3", 2, 3));
console.log(4, fill(arr4, "replaced 4", undefined, 3));
console.log(5, fill(arr5, "replaced 5", 3, 2));
console.log(6, fill(arr5, "replaced 5", 2, 100));

console.log(1, arr1);
console.log(2, arr2);
console.log(3, arr3);
console.log(4, arr4);
console.log(5, arr5);
console.log(6, arr6);