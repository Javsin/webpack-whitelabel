const global = require('../../../layout/template5/global.js')
window.kontak = (e) => {
    try {
        let set = Android.get_kontak()
    } catch (error) {

    }
}

window.scan = (e) => {
    try {
        let set = Android.get_kontak_scan()
    } catch (error) {
      
    }
}

window.informasi_pin = () => {
    try {
        Android.dialogInfoPin()
    } catch (error) {

    }
}

window.set_kontak = (kontak) => {
    let el_kontak = document.querySelector('.nomor')
    el_kontak.value = kontak
}

window.pdam_from_history = (produk) => {
    const el_harga = document.getElementById('total-bottom')
    setTimeout(() => {
        global.data_produk.map((item) => {
            item.detail.filter((item) => {
                if(item.kode === produk){
                    let wilayah = document.getElementById('wilayah')
                    wilayah.value = item.produk
                    wilayah.setAttribute('data-produk',item.produk)
                    wilayah.setAttribute('data-harga',item.harga)
                    wilayah.setAttribute('data-kode',item.kode)
                    wilayah.setAttribute('data-exp',item.exp)
                    const harga = item.harga.toString().replace('-','')
                    el_harga.innerHTML = `(Rp ${harga})`
                }
            })
        }) 
    }, 100);
}

module.exports = {
    kontak,
    scan,
    informasi_pin,
    set_kontak,
    pdam_from_history
}
