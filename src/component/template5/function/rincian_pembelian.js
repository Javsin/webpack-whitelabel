const cek = require('./cek_tagihan.js')
const global = require('../../../layout/template5/global.js')
window.rincian_pembelian = () => {
    const main_input = document.getElementById('main-input')
    const nomor = main_input.querySelector('.nomor').value
    const wilayah = main_input.querySelector('.wilayah').value
    const error_nomor = main_input.querySelector('.error_number')
    const kode_produk = main_input.querySelector('.wilayah').dataset.kode
    const xp = main_input.querySelector('.wilayah').dataset.exp
    const harga = main_input.querySelector('.wilayah').dataset.harga
    const title = global.data_config.judul
    const error_wilayah = main_input.querySelector('.error_wilayah')
    if(nomor.length > 0){
        if(kode_produk != ''){
            let value_tagihan = cek.cek_tagihan(nomor,wilayah,kode_produk,xp,harga,title)
        }else{
            error_wilayah.classList.remove('d-none')
            error_wilayah.innerHTML = "Data wilayah tidak ditemukan"
        }
    }else{
        error_nomor.classList.remove('d-none')
        error_nomor.innerHTML = "Isi nomor id pelanggan lebih dulu"
    }
}
module.exports = {rincian_pembelian}