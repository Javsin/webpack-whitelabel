const layout = require("./layout/template8/template8");
const layout_1 = require('./component/template8/view/setupview.js');
const partner = require('./globalfunction/get_partner.js')
const global = require('./layout/template8/global.js')
const injectAndroid = require('./component/template8/function/injectAndroid.js')
global.data_partner = partner.get_partner()
document.querySelector("#main_el").innerHTML = layout.html();
layout_1.setupview(global.data_partner);
