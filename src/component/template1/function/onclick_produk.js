const global = require('../../../layout/template1/global.js')
window.set_harga = (event) => {
    const proses_nominal = document.getElementById('set_nominal')
    const tagging = event.querySelector('.tagging')
    const produk = event.querySelector('.produk')
    const box_harga = event.querySelector('.box-harga')
    const price = event.querySelector('.price')
    const exp = event.querySelector('.exp')
    const kode_produk = event.querySelector('.kode_produk')
    const gangguan = event.querySelector('.gangguan').dataset.gangguan
    const remove_active = document.getElementsByClassName('box-harga')
    proses_nominal.disabled = false
    if(gangguan === 'true'){
        Android.showDialog("Maaf, produk sedang gangguan")
    }else{
        for(let i = 0; i < remove_active.length; i++){
            remove_active[i].classList.remove('border-orange','background-yellow-light')
            remove_active[i].querySelector('.tagging').classList.remove('background-orange')
            remove_active[i].querySelector('.tagging').classList.add('background-gray')
        }
        box_harga.classList.contains('background-green') ? box_harga.classList.add('background-yellow-light','border-orange'):tagging.classList.remove('background-gray'),tagging.classList.add('background-orange'),box_harga.classList.add('background-yellow-light','border-orange')
        global.temp_valueproduk = {
            "produk": produk.dataset.produk,
            "price" : price.dataset.harga,
            "kode_produk" : kode_produk.dataset.kode,
            "exp" : exp.dataset.exp,
        }
    }
}

module.exports = {
    set_harga
}