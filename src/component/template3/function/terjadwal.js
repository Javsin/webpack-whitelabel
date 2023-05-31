const global = require('../../../layout/template3/global.js')
window.terjadwal = () => {
  let harga = 0
  if(global.isppob === false ){
    harga = global.temp_valueproduk.price
  }
  let terjadwal = []
  const el_nomor = document.querySelector('.nomor')
  let pembelian_item = {
      "tujuan" : el_nomor.value,
      "kode_produk" : global.temp_valueproduk.kode_produk,
      "produk" : `${global.data_produk[0].operator} ${global.temp_valueproduk.produk}`,
      "harga" : harga,
  }
  terjadwal.push(pembelian_item)
  try {
    Android.setFckingTerjadwal(JSON.stringify(terjadwal))
  } catch (error) {
    
  }
}
module.exports = {terjadwal}