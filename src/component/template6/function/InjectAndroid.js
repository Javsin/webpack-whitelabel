const {onTriggerAutoComplete} = require("./on_trigger_autocomplete");
const {onClickMenu} = require("./on_click_menu");
const {onClickProduk} = require("./on_click_produk");
window.set_kontak = (kontak) => {
    let element_kontak = document.querySelector(".nomor");
    element_kontak.value = kontak;
    onTriggerAutoComplete();
  };
  
window.kontak = (e) => {
    try {
      let set = Android.get_kontak();
    } catch (error) {}
};
  
window.scan = (e) => {
    try {
      let set = Android.get_kontak_scan();
    } catch (error) {}
};

window.informasi_pin = () => {
    try {
      Android.dialogInfoPin()
    } catch (error) {

    }
}

window.set_operator = (operator,produk) => {
  onClickMenu(operator)
  setTimeout(() => {
    if(produk !== null || produk !== '') {
      let el = document.querySelectorAll('.card-produk')[0]
      let kode = el.querySelector('.kode').getAttribute('data-kode')
      if(kode === produk) {
        onClickProduk(el,'')
      }
    }
  }, 1500);
}

module.exports = {set_kontak, kontak, scan, informasi_pin, set_operator}