
function fjernVokal(string) {
    let vokaler = ['a','e','i','o','u','y'];
    let nyString = "";
    
    for (let i = 0; i < string.length; i++) {

      if (vokaler.indexOf(string[i]) === -1) {

        nyString += string[i];
      }
    }
    return nyString;
  }
  let string = ("Halo mitt navn er Benjamin");

  let nyString = fjernVokal(string);

  console.log(nyString);
