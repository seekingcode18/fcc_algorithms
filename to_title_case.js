function titleCase(str) {
  let lc = str.toLowerCase();
  let sentence = lc.split(" ");
  let arr = [];
  
  for (let i = 0; i < sentence.length; i++) {
    let firstLetter = sentence[i].match(/./);
    arr.push(sentence[i].replace(firstLetter, a => a[0].toUpperCase()));

  }

  return arr.join(" ");
}
titleCase("I'm a little tea pot");
