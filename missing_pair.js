function pairElement(str) {
  const input = str.split('');
  
  // loop through input and return new array
  let output = input.map((elem) => {
    // if G, push ['G', 'C'] to output
    // if C, push ['C', 'G'] to output
    // if A, push ['A', 'T'] to output
    // if T, push ['T', 'A'] to output
     switch (elem) {
      case 'G':
      return ['G', 'C'];
      break;
      case 'C':
      return ['C', 'G'];
      break;
      case 'A':
      return ['A', 'T'];
      break;
      case 'T':
      return ['T', 'A'];
      break;
    }
  }); 
  return output;
}

pairElement("GCG");
