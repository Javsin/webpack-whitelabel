const global = require("../../../layout/template6/global");
window.terjadwal = () => {
  let terjadwal = [];
  const value = document.querySelector("#input-nomor").value;
  const {kode_produk,produk,harga} = global.storedData;
  let pembelian_item = {
    tujuan: value,
    kode_produk: kode_produk,
    produk : produk, 
    harga: harga,
  };
  terjadwal.push(pembelian_item);
  try {
    Android.setFckingTerjadwal(JSON.stringify(terjadwal));
  } catch (error) {}
};
module.exports = { terjadwal };
