const global = require('../../../layout/template1/global.js')
window.set_nominal = () => {
    global.offcanvas_harga.hide() 
    const main_suggest = document.getElementById('main_suggest')
    const total_bottom = document.getElementById('total-bottom')
    const nominal = document.getElementsByClassName('nominal')
    main_suggest.classList.add("d-none")
    total_bottom.innerHTML = ""
    global.nominal_tag.value = global.temp_valueproduk.produk
    global.nominal_tag.dataset.produk = global.temp_valueproduk.produk
    global.nominal_tag.dataset.harga = global.temp_valueproduk.price
    global.nominal_tag.dataset.kode = global.temp_valueproduk.kode_produk
    global.nominal_tag.dataset.exp = global.temp_valueproduk.exp
    const error_produk = global.nominal_tag.parentNode.parentNode.querySelector('.produk-notfound')
    error_produk.classList.add('d-none')
    document.getElementById('footer').classList.remove('d-none')
    global.nominal_tag = ''
    temp_valueproduk = []
    let total = 0
    for(let x=0;x<nominal.length;x++){
        total += parseInt(nominal[x].dataset.harga)
    }
    total = formatRupiah(String(total),'Rp. ')
    total_bottom.innerHTML += total
}

module.exports = {
    set_nominal
}