const global = require("../../../layout/template6/global");
window.favorite = () => {
    let pembelian = [];
    const value = document.querySelector("#input-nomor").value;
    const produk = global.storedData.kode_produk;
    let pembelian_item = {
      tujuan: value,
      kode_produk: produk,
    };
    pembelian.push(pembelian_item);
    try {
      const val_pembelian = Android.setFavorite(JSON.stringify(pembelian));
    } catch (error) {}
};

module.exports = { favorite };