const global = require('../../../layout/template1/global.js')
window.favorite = () => {
    global.pembelian = []
    const nomor = document.getElementsByClassName('nomor')
    const nominal = document.getElementsByClassName('nominal')
    let total_nomor = nomor.length
    for(let i = 0; i < total_nomor; i++){
      let pembelian_item = {
        "tujuan" : nomor[i].value,
        "produk" : nominal[i].dataset.produk,
        "harga" : parseInt(nominal[i].dataset.harga),
        "kode_produk" : nominal[i].dataset.kode,
        "exp" : nominal[i].dataset.exp,
        "title" : global.data_config.judul
      }
      global.pembelian.push(pembelian_item)
    }
    try {
      const val_pembelian = Android.setFavorite(JSON.stringify(global.pembelian))
    } catch (error) {
      
    }
}

module.exports = {favorite}
