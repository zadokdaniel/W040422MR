/*
1. create new project
2. use console.log to tell the types and values of the followings
	- 5 < 8 + 4 * 3 
	- "5" - "8" * "30" - 3
	- true + "hello"
	- {name: "daniel", age: 27} + []
	- {} - 50 * 3
	- 8 != 8 * 2 + typeof 88
	- typeof 38 * 5
	- typeof (38 * 5) + " is a number"
	- "Daniel" + " (" + 27 + ")"
	- 5 * null
	- "a" + 40 * "a"
	- 5 * 3 + 88 !== "103"
	- 5 * 3 + 88 !== 103
	- typeof typeof 55

*/

console.log("5 < 8 + 4 * 3", 5 < 8 + 4 * 3);
console.log("typeof (5 < 8 + 4 * 3)", typeof (5 < 8 + 4 * 3));
console.log('"5" - "8" * "30" - 3', "5" - "8" * "30" - 3);
console.log('typeof ("5" - "8" * "30" - 3)', typeof ("5" - "8" * "30" - 3));
console.log('true + "hello"', true + "hello");
console.log('typeof (true + "hello")', typeof (true + "hello"));
console.log(
  '{ name: "daniel", age: 27 } + []',
  { name: "daniel", age: 27 } + []
);
console.log(
  'typeof ({ name: "daniel", age: 27 } + [])',
  typeof ({ name: "daniel", age: 27 } + [])
);
console.log("{} - 50 * 3", {} - 50 * 3);
console.log("typeof ({} - 50 * 3)", typeof ({} - 50 * 3));
console.log("8 != 8 * 2 + typeof 88", 8 != 8 * 2 + typeof 88);
console.log("typeof (8 != 8 * 2 + typeof 88)", typeof (8 != 8 * 2 + typeof 88));
console.log("typeof 38 * 5", typeof 38 * 5);
console.log("typeof (typeof 38 * 5)", typeof (typeof 38 * 5));
console.log(
  'typeof (38 * 5) + " is a number"',
  typeof (38 * 5) + " is a number"
);
console.log(
  'typeof (typeof (38 * 5) + " is a number")',
  typeof (typeof (38 * 5) + " is a number")
);
console.log('"Daniel" + " (" + 27 + ")"', "Daniel" + " (" + 27 + ")");
console.log(
  'typeof ("Daniel" + " (" + 27 + ")")',
  typeof ("Daniel" + " (" + 27 + ")")
);
console.log("5 * null", 5 * null);
console.log("typeof (5 * null)", typeof (5 * null));
console.log('"a" + 40 * "a"', "a" + 40 * "a");
console.log('typeof ("a" + 40 * "a")', typeof ("a" + 40 * "a"));
console.log('5 * 3 + 88 !== "103"', 5 * 3 + 88 !== "103");
console.log('typeof (5 * 3 + 88 !== "103")', typeof (5 * 3 + 88 !== "103"));
console.log("5 * 3 + 88 !== 103", 5 * 3 + 88 !== 103);
console.log("typeof (5 * 3 + 88 !== 103)", typeof (5 * 3 + 88 !== 103));
console.log("typeof typeof 55", typeof typeof 55);
console.log("typeof (typeof typeof 55)", typeof typeof typeof 55);

console.log({
  a: 4,
  b: "string",
  c: "cd",
  d: `string`,
  e: true,
  f: false,
  g: null,
  h: undefined,
  i: {
    a: 4,
    b: "string",
    c: "cd",
    d: `string`,
    e: true,
    f: false,
    g: null,
    h: undefined,
    i: {
      a: 4,
      b: "string",
      c: "cd",
      d: `string`,
      e: true,
      f: false,
      g: null,
      h: undefined,
      i: {
        a: 4,
        b: "string",
        c: "cd",
        d: `string`,
        e: true,
        f: false,
        g: null,
        h: undefined,
        i: {
          a: 4,
          b: "string",
          c: "cd",
          d: `string`,
          e: true,
          f: false,
          g: null,
          h: undefined,
          i: {
            a: 4,
            b: "string",
            c: "cd",
            d: `string`,
            e: true,
            f: false,
            g: null,
            h: undefined,
            i: null,
          },
        },
      },
    },
  },
});

console.log([
  "dskfjsd",
  "sdfsd",
  `kdsjfs`,
  43,
  true,
  false,
  null,
  undefined,
  { a: 45, b: 22 },
  [
    [
      "dskfjsd",
      "sdfsd",
      `kdsjfs`,
      43,
      true,
      false,
      null,
      undefined,
      {
        a: 45,
        b: 22,
        c: [
          "dskfjsd",
          "sdfsd",
          `kdsjfs`,
          43,
          true,
          false,
          null,
          undefined,
          { a: 45, b: 22 },
          [],
        ],
      },
      [
        [
          "dskfjsd",
          "sdfsd",
          `kdsjfs`,
          43,
          true,
          false,
          null,
          undefined,
          { a: 45, b: 22 },
          [],
        ],
      ],
    ],
  ],
]);
