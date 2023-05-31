const set_produk = require('../view/setup_produk.js')
const global = require('../../../layout/template5/global.js')
window.get_wilayah = (e) => {
    global.offcanvas_produk = new bootstrap.Offcanvas(document.getElementById('offcanvasPDAM'))
    const main_input = document.getElementById('main-input')
    let input_search = document.getElementById('labelsearch').parentNode.children[1]
    input_search.value = ''
    const nomor = main_input.querySelector('.nomor').value
    const error_nomor = main_input.querySelector('.error_number')
    if(nomor.length > 0){
      global.offcanvas_produk.show()
      set_produk.setup_produk('')
    }else{
      error_nomor.classList.remove('d-none')
      error_nomor.innerHTML = "Isi nomor id pelanggan lebih dulu"
    }
}

module.exports = {get_wilayah}