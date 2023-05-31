const produk = require("./globalfunction/get_produk");
const config = require("./globalfunction/get_config");
const layout = require("./layout/template6/template6");

document.querySelector("#main_el").innerHTML = layout.html();

const global = require("./layout/template6/global");

const layout_main_content = require("./component/template6/view/setup_main_content");
const layout_default_navigation = require("./component/template6/view/setup_default_navigation");
const layout_footer = require("./component/template6/view/setup_footer");
const layout_menu = require("./component/template6/view/setup_menu");
const funct_pin  = require('./globalfunction/behind_pin.js')

require("./component/template6/function/autocomplete");
require("./component/template6/function/on_click_produk");
require("./component/template6/function/on_click_menu");
require("./component/template6/function/on_change_nomor");
require("./component/template6/function/on_click_to_menu");
require("./component/template6/function/on_click_detail");
require("./component/template6/function/on_click_filter");
require("./component/template6/function/on_activated_filter");
require("./component/template6/function/on_close_filter");
require("./component/template6/function/on_reset_form");
require("./component/template6/function/on_submit_filter");
require("./component/template6/function/on_search");
require("./component/template6/function/on_remove_range");
require("./component/template6/function/on_change_harga");
require("./component/template6/function/on_hold");
require("./component/template6/view/produk/setup_active_button");
require("./component/template6/function/show_keterangan");
require("./component/template6/function/rincian_pembayaran");
require("./component/template6/function/favorite");
require("./component/template6/function/terjadwal");
require("./component/template6/function/injectAndroid");
require("./component/template6/function/bayar.js");
require("./globalfunction/transform_input_floating");

const { onHiddenFilter } = require("./component/template6/function/on_hidden_filter");
const { resize, set_heightscreen } = require("./component/template6/function/on_show_footer");

global.rawData = produk.get_data();
global.config = config.get_config();

layout_main_content.setup_main_content();
layout_default_navigation.setup_default_navigation();
layout_footer.setup_footer();
layout_menu.setup_menu();
funct_pin.get_pin();

onHiddenFilter();
set_heightscreen();
resize();