/** access */

const str = "hello from daniel 3";

console.log(str[1]); // "e"
console.log(str.at(1)); // "e"
console.log(str.at(-1)); // "l"

/** does include the characters */

console.log(str.includes("z")); // false
console.log(str.includes("ll")); // true
console.log(str.includes("daniel")); // true
console.log(str.includes("word")); // false

/** find index of character (finds first occurrence)*/

console.log(str.indexOf("hello")); //0
console.log(str.indexOf("daniel")); // 11
console.log(str.indexOf("l")); // 2

/** replace characters */

console.log(str.replace("l", "?")); // "he?lo from daniel 3"
console.log(str.replaceAll("l", "?")); // "he?o from danie? 3"
console.log(str.replaceAll("daniel", "x")); // "hello from x 3"

console.log("hello \n\n\n my name is \n\n daniel".replaceAll("\n", "<br />")); // "hello from x 3"

/** cut a sub string */

console.log(str.slice(6, 10)); // "from"
console.log(str.slice(6)); // "from daniel 3"

/** split into an Array */

console.log(str.split(" ")); // ['hello', 'from', 'daniel', '3']
console.log(str.split()); // ['hello from daniel 3']
console.log(str.split("")); //['h', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'o', 'm', ' ', 'd', 'a', 'n', 'i', 'e', 'l', ' ', '3']
console.log(str.split("l")); // ['he', '', 'o from danie', ' 3']

/** casing */

console.log(str.toLowerCase());
console.log(str.toUpperCase());

/** trim extra spaces from beginning and end */
console.log("                    hello              bye          ".trim()); // "hello              bye"
