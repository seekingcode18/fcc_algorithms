function convertHTML(str) {
  let htmlCodes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;",
  };
  
  for (let i = 0; i < str.length; i++) {
    for (let char in htmlCodes) {
      // console.log('char:   ' + char)
      // console.log('hC[ch]: ' + htmlCodes[char] + '\n')
      if (str.charAt(i) === char) {
        str = str.replace(char, htmlCodes[char])
      }
    }
  }

  return str;
}


convertHTML("Dolce & Gabbana")// Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos")// Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve")// Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"')// Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Schindler's List")// Schindler&​apos;s List.
// convertHTML("<>")// &​lt;&​gt;.
// convertHTML("abc")// abc.
