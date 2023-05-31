const global = require('../../../layout/template4/global.js')
window.favorite = () => {
    const {kode_produk,tujuan } = global.storedData
    let pembelian = []
    let pembelian_item = {
        "tujuan" : tujuan,
        "kode_produk" : kode_produk,
    }
    pembelian.push(pembelian_item)
    try {
      const val_pembelian = Android.setFavorite(JSON.stringify(pembelian))
    } catch (error) {
      
    }
}
module.exports = {favorite}
  