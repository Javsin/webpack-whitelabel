const global = require('../../../layout/template5/global.js')
window.set_produk = (element) => {
    let el = element.querySelector('p')
    let kode = el.dataset.kode
    let produk = el.dataset.produk
    let harga = el.dataset.harga
    let xp = el.dataset.xp
    global.temp_produk = kode
    const el_produk = document.querySelector('.wilayah')
    const el_harga = document.querySelector('#total-bottom')
    el_produk.dataset.kode = kode
    el_produk.dataset.produk = produk
    el_produk.dataset.harga = harga
    el_produk.dataset.exp = xp
    el_produk.value = produk
    el_harga.innerHTML = `(Rp ${harga.replace('-','')})`
    global.offcanvas_produk.hide()
}

module.exports = {set_produk}