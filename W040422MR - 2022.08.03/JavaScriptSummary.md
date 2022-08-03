# JS

## Building Blocks

1. Data Types
2. Expressions and Operators
3. Statemnets and Declarations
4. Functions

## Data Types

- Data types are the different types of data in JS
- any data type can also be called "value"
- Value can be written literally or with an expression
- Data Types are categorized by two categories
  1. primitives
  2. references (objects)

### Primitives

#### String

can be accessed as an array

- Literal definition:
  - `"my string"`
  - `'my string'`
  - `` `my string ${VALUE}` `` (template literal)
    - can use `${value}` to concatanate into the string
    - multi-line string
- Convert Into String:
  - `String(VALUE)`

#### Number

- Literal definition:
  - `2`, `2.5`, `-3.21`, `-4`, `0`, `3_333_444_454`
  - `NaN` - a number which represents a none number value usually the result of converting to number
    - `NaN` never equals to any other value including it self the only way to check is a value `NaN` is using `isNaN(VALUE)`
    - Low Dash (`_`) can be used like commas. JS ignores them but it can make the code easier to read
- Convert Into Number:
  - `Number(VALUE)`
  - `parseInt(VALUE, BASE)` - to inteager. set `BASE` to 10 for decimal
  - `parseFloat(VALUE)`

#### Boolean

- Literal definition:
  - `true`
  - `false`
- Convert Into Boolean:
  - `Boolean(VALUE)`

#### Null

- Literal definition:
  - `null`

#### Undefined

- Literal definition:
  - `undefined`

### Convertions

- convert to boolean
  - FALSY values
    - string: `''` - empty string
    - number: `0`, `-0`, `NaN`
    - `null`
    - `undfined`
  - TRUTHY values:
    - any other value

![enter image description here](https://miro.medium.com/max/1400/0*AO0bt6MghegKIOsS.png)

## CookBook

### string ([reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))

```javascript
const str = "hello from daniel 3";

/** access */
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
console.log(" hello bye ".trim()); // "hello bye"
```
