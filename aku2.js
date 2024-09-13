const readlineSync = require('readline-sync');
 const jumlah = readlineSync.questionInt(
    "🔄 How much amount you want to bridge ? => "
  );
  const awal = 10000000000000000;
  const ambilJumlah = jumlah.toFixed(0);
  const jumlahTx = ambilJumlah * 100000;
  const patAwal = Number(String(awal).replace("1000",jumlahTx));
  const desimal = String(jumlahTx / 100000);
  const saldoHex = patAwal.toString(16);
console.log(saldoHex);
console.log(desimal);
console.log(patAwal);
console.log(jumlahTx);
console.log(ambilJumlah);
