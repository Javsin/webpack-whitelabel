const global = require('../../../layout/template1/global.js')
window.set_terlaris = (e) => {
    const main_suggest = document.getElementById('main_suggest')
    const suggest = document.getElementById('suggest')
    const total_bottom = document.getElementById('total-bottom')
    const nominal = document.getElementsByClassName('nominal')
    const produk = e.dataset.produk
    const harga = e.dataset.harga
    const kode = e.dataset.kode
    const exp = e.dataset.exp
    global.target_suggest.value = produk
    global.target_suggest.dataset.kode = kode
    global.target_suggest.dataset.exp = exp
    global.target_suggest.dataset.produk = produk
    global.target_suggest.dataset.harga = harga
    main_suggest.classList.add("d-none")
    const error_produk = global.target_suggest.parentNode.parentNode.querySelector('.produk-notfound')
    error_produk.classList.add('d-none')
    suggest.innerHTML = ""
    footer.classList.remove('d-none')
    let total = 0
    for(let x=0;x<nominal.length;x++){
        total += parseInt(nominal[x].dataset.harga)
    }
    total = formatRupiah(String(total),'Rp. ')
    total_bottom.innerHTML = total
}