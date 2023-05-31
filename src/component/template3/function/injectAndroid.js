const set = require('./set_harga.js')
window.set_kontak = (kontak) => {
    document.querySelector('.nomor').value = kontak
}

window.informasi_pin = () => {
    try {
        Android.dialogInfoPin()
    } catch (error) {

    }
}

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

window.set_produk = (data_produk) => {
    setTimeout(() => {
        let el_produk = document.querySelectorAll('.view-produk')
        el_produk.forEach((e) => {
            const x = e.querySelector('.kode_produk').getAttribute('data-kode')
            if (x == data_produk) {
                set.set_harga(e)
                e.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
        })
    }, 100);
}

module.exports = {
    kontak,
    scan,
    informasi_pin,
    set_kontak,
    set_produk
}