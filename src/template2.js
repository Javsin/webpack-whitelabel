const produk = require('./globalfunction/get_produk.js')
const config = require('./globalfunction/get_config.js')
const settings = require('./globalfunction/config.js')
const layout = require('./layout/template2/template2.js')
const layout_1 = require('./component/template2/view/setupview.js')
const global = require('./layout/template2/global.js')
const footermanipulation =  require('./globalfunction/offcanvasshowfooter.js')
const funct_pin  = require('./globalfunction/behind_pin.js')
const screen = require('./globalfunction/resize.js')
require('./component/template2/function/show_keterangan.js')
require('./component/template2/function/favorite.js')
require('./component/template2/function/terjadwal.js')
require('./component/template2/function/rincian_pembelian.js')
require('./component/template2/view/view_cek.js')
require('./component/template2/function/bayar.js')
require('./component/template2/function/injectAndroid.js')
require('./globalfunction/isNumber.js')
global.data_produk = produk.get_data()
global.data_config = config.get_config()
global.setting = settings.config()
document.querySelector('#main_el').innerHTML = layout.html()
layout_1.setupview(global.data_config,global.data_produk)
footermanipulation.off_footer()
screen.set_heightscreen()
screen.set_resize()
funct_pin.get_pin()