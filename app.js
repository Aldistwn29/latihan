const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startCalculator() {
  rl.question('Masukkan operasi matematika (contoh: 5 + 3): ', (input) => {
    try {
      const result = eval(input);
      console.log(`Hasil: ${result}`);
    } catch (error) {
      console.log('Terjadi kesalahan. Pastikan Anda memasukkan operasi matematika yang valid.');
    }

    rl.question('Lanjut (y/n)? ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        startCalculator();
      } else {
        rl.close();
      }
    });
  });
}