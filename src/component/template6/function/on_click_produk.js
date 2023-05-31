const global = require("../../../layout/template6/global");

window.onClickProduk = (element, event) => {
  const boxHarga = element.querySelector(".box-harga");
  const tag = element.querySelector(".tagging");
  const allBoxHarga = document.querySelectorAll(".box-harga");
  const allTag = document.querySelectorAll(".tagging");
  const inputNomor = document.querySelector("#input-nomor");
  const gangguan = element.querySelector(".gangguan").dataset.gangguan;
  const detail = element.querySelector(".detail");
  const trimVal = inputNomor.value.trim();
  
  if (gangguan === "true") {
    Android.showDialog("Maaf, produk sedang gangguan");
  } else {
    allBoxHarga.forEach((box) => {
      if (box !== boxHarga) {
        box.classList.remove("border-orange", "background-yellow-light", "on");
      } else {
        box.classList.add("border-orange", "background-yellow-light", "on");
      }
    });

    allTag.forEach((item) => {
      if (item !== tag) {
        item.classList.remove("background-orange");
      } else {
        if (item.classList.contains("background-green")) {
          global.isProdukSelected = true;
          return;
        } else {
          global.isProdukSelected = true;
          item.classList.add("background-orange");
        }
      }
    });

    const valueHarga = element.querySelector(".harga").dataset.harga;
    const valueKode = element.querySelector(".kode").dataset.kode;
    const valueExp = element.querySelector(".exp").dataset.exp;
    const valueProduk = element.querySelector(".produk").dataset.produk;

    global.labelTotal.innerHTML = formatRupiah(valueHarga, "Rp. ");

    if (global.isProdukSelected) {
      global.storedData.kode_produk = valueKode;
      global.storedData.harga = +valueHarga;
      global.storedData.exp = valueExp;
      global.storedData.produk = valueProduk;
      global.storedData.title = global.config.judul;
    } else {
      global.storedData.kode_produk = null;
      global.storedData.harga = null;
      global.storedData.exp = null;
      global.storedData.produk = null;
    }
  }
};

module.exports = {
  onClickProduk,
};
