window.terjadwal = () => {
    let terjadwal = []
    const el_nomor = document.querySelector('.nomor')
    const el_produk = document.querySelector('.produk')
    let pembelian_item = {
        "tujuan" : el_nomor.value,
        "kode_produk" : el_produk.dataset.kode,
        "produk" : el_produk.dataset.produk,
        "harga" : 0,
    }
    terjadwal.push(pembelian_item)
    try {
      Android.setFckingTerjadwal(JSON.stringify(terjadwal))
    } catch (error) {
      
    }
}
module.exports = {terjadwal}