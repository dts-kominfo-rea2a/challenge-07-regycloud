const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let hasil = 0;
  await promiseTheaterIXX(emosi).then(data => {
    // console.log(data)
    data.map((film) => {
      if (film.hasil == emosi) {
        hasil += 1;
      }
    })
  });

  await promiseTheaterVGC(emosi).then(data => {
    data.map((film) => {
      if (film.hasil == emosi) {
        hasil += 1;
      }
    })
  })
  return hasil
};

module.exports = {
  promiseOutput,
};
