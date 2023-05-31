const set_produk = require('../view/setup_produk.js')
window.find_wilayah = (search) => {
    let value = search.value
    set_produk.setup_produk(value)
}

module.exports =  {find_wilayah}