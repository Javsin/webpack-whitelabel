const global = require('../../../layout/template1/global.js')
const data_pembelian = () => { 
    global.pembelian = []
    const nomor = document.getElementsByClassName('nomor')
    const nominal = document.getElementsByClassName('nominal')
    let total_nomor = nomor.length
    let isValid = true
    const error_nomor = document.getElementsByClassName('hlr-notfound')
    const error_produk = document.getElementsByClassName('produk-notfound')
    for(let i = 0; i < total_nomor; i++){
        if(nomor[i].value === ''){
        isValid = false
        error_nomor[i].classList.remove('d-none')
        error_nomor[i].innerHTML = 'Isi nomornya dulu'
        }
        if(nominal[i].value === '' || nominal[i].dataset.produk === ''){
        isValid = false
        error_produk[i].classList.remove('d-none')
        error_produk[i].innerHTML = 'Isi produknya dulu'
        }
        let pembelian_item = {
            "tujuan" : nomor[i].value,
            "produk" : nominal[i].dataset.produk,
            "harga" : parseInt(nominal[i].dataset.harga),
            "kode_produk" : nominal[i].dataset.kode,
            "exp" : nominal[i].dataset.exp,
            "title" : global.data_config.judul,
        }
        global.pembelian.push(pembelian_item)
    }
    return isValid
}

module.exports = {data_pembelian}