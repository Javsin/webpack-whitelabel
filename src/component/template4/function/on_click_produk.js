const global = require('../../../layout/template4/global.js');
const rupiah = require("../../../globalfunction/formatRupiah.js");
window.onClickProduk = (element) => {
    const total_bottom = document.getElementById('total-bottom');
    const inputNominal = document.querySelector("body").querySelector("#input-nominal");
    !document.querySelector(".feedback").classList.contains("d-none") && document.querySelector(".feedback").classList.add("d-none");
    const price = element.querySelector(".price").dataset.price;
    const produk = element.querySelector(".produk").dataset.produk;
    const kode = element.querySelector(".kode_produk").dataset.kode;
    const exp = element.querySelector(".exp").dataset.exp;
    const boxHarga = element.querySelector(".box-harga");
    // Set Active Card
    boxHarga.classList.remove("bg-white");
    boxHarga.classList.add("background-yellow-light", "border-orange");
  
    // when other card is selected remove class
    const otherBox = document.querySelectorAll(".box-harga");
    otherBox.forEach((item) => {
      if (item !== boxHarga) {
        item.classList.remove("background-yellow-light", "border-orange");
        item.classList.add("bg-white");
      }
    });
  
  
    // Manipulate Component
    inputNominal.value = rupiah.formatRupiah(produk);
    // labelTotal.innerHTML = formatRupiah(price, "Rp ");
  
    // Store to Global Variable
    global.storedData.produk = produk;
    global.storedData.kode_produk = kode;
    global.storedData.harga = price;
    global.storedData.title = global.data_config.judul
    global.storedData.exp = exp;
    total_bottom.innerHTML = rupiah.formatRupiah(price, "Rp ");
};

module.exports = {onClickProduk};