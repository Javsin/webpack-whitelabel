window.terjadwal = () => {
    let terjadwal = []
    const nomor = document.getElementsByClassName('nomor')
    const nominal = document.getElementsByClassName('nominal')
    let total_nomor = nomor.length
    for(let i = 0; i < total_nomor; i++){
      let pembelian_item = {
        "tujuan" : nomor[i].value,
        "produk" : nominal[i].dataset.produk,
        "harga" : parseInt(nominal[i].dataset.harga),
        "kode_produk" : nominal[i].dataset.kode,
      }
      terjadwal.push(pembelian_item)
    }
   
    try {
      Android.setFckingTerjadwal(JSON.stringify(terjadwal))
    } catch (error) {
      
    }
}
module.exports = {terjadwal}