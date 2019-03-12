function fearNotLetter(str) {
  let result;
  let missingCode = 0;

  // convert string to array of character codes
  const chars = str.split('');
  const charCodes = [];
  const length = chars.length;
  let isMissing = false;
  
  for (let i = 0; i < length; i++) {
    charCodes.push(chars[i].charCodeAt())
  }
  
  // loop through the character codes and compare them
  for (let j = 0; j < length - 1; j++) {
    // console.log(charCodes[j] + 1)
    // console.log(charCodes[j+1])

    if (charCodes[j] + 1 === charCodes[j+1]) {
      isMissing = false;
    } else if (charCodes[j] + 1 !== charCodes[j+1]) {
      isMissing = true;
      missingCode = charCodes[j] + 1;
      break;
    }
  }

  // if a letter is missing, convert its code to the letter and return the letter
  if (isMissing) {
    return String.fromCharCode(missingCode);
  }
  return undefined;
}
