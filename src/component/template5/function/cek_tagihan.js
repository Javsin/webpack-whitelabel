
const cek_tagihan = (tujuan,produk,kode_produk,xp,harga,title) => {
    try {
        kode_produk = kode_produk.replace('BYR','CEK')
        let tagihan = {
            "tujuan" : tujuan,
            "produk" : produk,
            "harga" : harga,
            "kode_produk" : kode_produk,
            "exp" : xp,
            "title" : title
        }
        Android.sendNudes(JSON.stringify(tagihan)) 
    } catch (error) {
      
    }
}

module.exports = {cek_tagihan}