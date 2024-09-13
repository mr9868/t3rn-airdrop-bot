const readlineSync = require('readline-sync');
 const jumlah = readlineSync.questionFloat(
    "🔄 How much amount you want to bridge ? => "
  );
  const awal = 10000000000000000;
  const jumlahTx = jumlah * 100000;
  const patAwal = Number(String(awal).replace("1000",jumlahTx));
  const desimal = String(jumlahTx / 100000);
  const saldoHex = patAwal.toString(16);
console.log("000" + saldoHex);
console.log("000" + saldoHex);
console.log(desimal);
console.log(patAwal);
console.log(jumlahTx);
console.log(jumlah);

const nolsatu = 51000000000000000;
  const min = 1000;
  const max = 1111;
  const randomValue = Math.random() * (max - min) + min;
  const acak = randomValue.toFixed(0);
  const desimal = String(acak / 100000);

// convert number to a string, then extract the first digit
var final = Number(String(nolsatu).replace("1000",acak));
const saldo = nolsatu.toString(16);
console.log(desimal);
console.log(nolsatu);
console.log(final);
console.log(saldo);
let num = 42;

let paddedNum = String(saldo).padStart(16, '0'); // '00042'
console.log(paddedNum);
