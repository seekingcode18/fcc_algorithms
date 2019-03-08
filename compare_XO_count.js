function XO(str) {

if (!str.includes("o") && !str.includes("x")) {
  return true
}

let countX = 0, countO = 0;

for (let i = 0; i < str.length; i++) {

  if (str[i] === "x") {
    countX++;
  }

  if (str[i] === "o") {
    countO++;
  }

}

if (countO === countX) {
  return true
}

// count Os & count Xs


// compare count

return false  
}
