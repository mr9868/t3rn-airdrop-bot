  const nolsatu = 10000000000000000;
  const min = 1000;
  const max = 1111;
  const randomValue = Math.random() * (max - min) + min;
  const baru = randomValue.toFixed(0);
  const desimal = baru / 10000

// convert number to a string, then extract the first digit
var final = Number(String(nolsatu).replace("1000",baru));

// convert the first digit back to an integer
// var one_as_number = Number(one);
// var tot  = one.replace(one,aku);
console.log(nolsatu));
console.log(final);
console.log(desimal);
