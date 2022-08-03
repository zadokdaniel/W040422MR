const wantedCharacters = ["AZ", "az", "09"];

let result = "";
for (const wanted of wantedCharacters) {
  const from = wanted.charCodeAt(0);
  const to = wanted.charCodeAt(1);

  for (let i = from; i <= to; i++) {
    result += String.fromCharCode(i);
  }
}

console.log(result);
