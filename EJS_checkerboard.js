function printBoard(size) {
  for (let n = 0; n < size; n++) {
    function printLine(lines) {
      lines % 2 === 0 ? str = ' ' : str = '#';
      for (let i = 1; i < size; i++) {
          if (str[str.length-1] === '#') {
              str += ' ';
          } else if (str[str.length-1] === ' ') {
              str+= '#';
          }
      }
      console.log( str )
    }
    printLine(n)
  }
}

printBoard(8)
