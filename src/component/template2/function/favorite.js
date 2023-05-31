window.favorite = () => {
    let pembelian = []
    const el_nomor = document.querySelector('.nomor')
    const el_produk = document.querySelector('.produk')
    let pembelian_item = {
        "tujuan" : el_nomor.value,
        "kode_produk" : el_produk.dataset.kode,
    }
    pembelian.push(pembelian_item)
    try {
      const val_pembelian = Android.setFavorite(JSON.stringify(pembelian))
    } catch (error) {
      
    }
}

module.exports = {favorite}