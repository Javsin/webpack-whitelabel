const produk = require('./globalfunction/get_produk.js')
const config = require('./globalfunction/get_config.js')
const terlaris = require('./globalfunction/get_terlaris.js')
const settings = require('./globalfunction/config.js')
const global  = require('./layout/template1/global.js')
const layout = require('./layout/template1/template1.js')
const layout_1 = require('./component/template1/view/setupview.js')
const footermanipulation =  require('./globalfunction/offcanvasshowfooter.js')
const screen = require('./globalfunction/resize.js')
const funct_pin  = require('./globalfunction/pin_front.js')
require('./component/template1/function/dynamicform.js')
require('./component/template1/function/onchange_hlr.js')
require('./globalfunction/isNumber.js')
require('./component/template1/view/view_produk.js')
require('./component/template1/function/onclick_produk.js')
require('./component/template1/function/set_produk.js')
require('./component/template1/function/set_terlaris.js')
require('./component/template1/function/show_keterangan.js')
require('./component/template1/function/rincian_pembelian.js')
require('./component/template1/function/bayar.js')
require('./component/template1/function/injectAndroid.js')
require('./component/template1/function/favorite.js')
require('./component/template1/function/terjadwal.js')
require('./component/template1/function/scroll_bottom.js')
global.data_produk = produk.get_data()
global.data_config = config.get_config()
global.data_terlaris = terlaris.get_terlaris()
global.setting = settings.config()
document.querySelector('#main_el').innerHTML = layout.html()
layout_1.setupview(global.data_config)
footermanipulation.off_footer()
screen.set_heightscreen()
screen.set_resize()
funct_pin.get_pin()







