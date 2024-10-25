
function binarytodecimal(input) {
  let decimal = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[input.length - 1 - i] ==="1"){
        decimal = decimal + Math.power(2,i)
      }
    }
      return decimal;
  }

console.log(binarytodecimal(101));