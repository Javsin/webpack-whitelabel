const global = require("../../../layout/template4/global.js");
const rupiah = require("../../../globalfunction/formatRupiah.js");
window.onChangeNominal = (e) => {
    const inputNominal = document.querySelector("body").querySelector("#input-nominal");
    const total_bottom = document.getElementById('total-bottom');
    const cardActive = document.querySelector(".background-yellow-light");
    const nominal = inputNominal.value;
    const nominalFormatted = rupiah.formatRupiah(nominal);
    const admin = global.data_produk.admin
  
    // Validation
    if (nominal.length === 0) {
      document.querySelector(".feedback").classList.remove("d-none");
      document.querySelector(".feedback").innerHTML = "Nominal tidak boleh kosong";
      return;
    } else {
      document.querySelector(".feedback").classList.add("d-none");
    }
  
    if (cardActive) {
      cardActive.classList.remove("background-yellow-light", "border-orange");
      cardActive.classList.add("bg-white");
    }
    inputNominal.value = nominalFormatted;
    let replace_harga = parseInt(nominalFormatted.replace(/[^0-9]/g, ""));
    let harga =  replace_harga + admin
    global.storedData.produk = nominalFormatted.replace(/[^0-9]/g, "");
    global.storedData.title = global.data_config.judul;
    global.storedData.harga = harga;
    global.storedData.kode_produk = global.data_produk.detail[0].kode;
    global.storedData.exp = global.data_produk.detail[0].exp;
    total_bottom.innerHTML = rupiah.formatRupiah(harga, "Rp ");
};

module.exports = {onChangeNominal};