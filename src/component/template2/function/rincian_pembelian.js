const cek = require('./cek_tagihan.js')
const global = require('../../../layout/template2/global.js')
window.rincian_pembelian = () => {
    const nomor = document.querySelector('.nomor').value
    const produk = document.querySelector('.produk').value
    const error_notif = document.querySelector('.error_number')
    const kode_produk = document.querySelector('.produk').dataset.kode
    const xp = document.querySelector('.produk').dataset.exp
    const harga = document.querySelector('.produk').dataset.harga
    const title = global.data_config.judul
    if(nomor.length > 0){
        error_notif.classList.add('d-none')
        let value_tagihan = cek.cek_tagihan(nomor,produk,kode_produk,xp,harga,title)
    }else{
        error_notif.innerHTML = "Isi ID pelanggan dulu" 
        error_notif.classList.remove('d-none')
    } 
}

module.exports = {rincian_pembelian}