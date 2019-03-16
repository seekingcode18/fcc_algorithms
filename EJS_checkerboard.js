function printCheckerboard(repetitions) {
  let result = '';
  for (let i = 0; i < repetitions; i++) {
    i % 2 === 0 ? str = ' ' : str = '#';
    for (let i = 1; i < repetitions; i++) {
        if (str[str.length-1] === '#') {
            str += ' ';
        } else if (str[str.length-1] === ' ') {
            str+= '#';
        }
    }
    result += str + '\n';
  }
  console.log(result)
}

printCheckerboard(8)
