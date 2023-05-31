const global = require('../../../layout/template3/global.js')
window.favorite = () => {
    let pembelian = []
    const el_nomor = document.querySelector('.nomor')
    let pembelian_item = {
        "tujuan" : el_nomor.value,
        "kode_produk" : global.temp_valueproduk.kode_produk,
    } 
    pembelian.push(pembelian_item)
    try {
      const val_pembelian = Android.setFavorite(JSON.stringify(pembelian))
    } catch (error) {
      
    }
}

module.exports = {favorite}