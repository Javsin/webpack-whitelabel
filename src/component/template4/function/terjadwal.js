const global = require('../../../layout/template4/global.js')
window.terjadwal = () => {   
    const {kode_produk,tujuan,produk } = global.storedData
    const {operator} = global.data_produk
    let terjadwal = []
    let pembelian_item = {
      "tujuan" : tujuan,
      "kode_produk" : kode_produk,
      "harga" : produk,
      "produk" : operator,
    }
    terjadwal.push(pembelian_item)
    try {
      Android.setFckingTerjadwal(JSON.stringify(terjadwal))
    } catch (error) {
      
    }
}

module.exports = {terjadwal}