const global = require('../../../layout/template4/global.js')
const view_bayar = require('../view/viewrincianbayar.js')
window.rincian_pembelian = () => { 
    const inputNomor = document.querySelector("body").querySelector("#input-nomor");
    const inputNominal = document.querySelector("body").querySelector("#input-nominal");
    
    if (inputNomor.value.length === 0) {
      document.querySelector(".hlr-notfound").classList.remove("d-none");
      document.querySelector(".hlr-notfound").innerHTML = "Tujuan tidak boleh kosong";
      return;
    }
  
    if (inputNominal.value.length === 0) {
      document.querySelector(".feedback").classList.remove("d-none");
      document.querySelector(".feedback").innerHTML = "Nominal tidak boleh kosong";
      return;
    }
    global.storedData.tujuan = inputNomor.value;
    const { produk, kode_produk, harga, title, exp, tujuan } = global.storedData;
    let pembelian_item = {
      "tujuan" : tujuan,
      "produk" : produk,
      "harga" : harga,
      "kode_produk" : global.is_ppob == true ? kode_produk.replace('BYR','CEK' ) : kode_produk,
      "exp" : exp,
      "title" : title
    }
    try {
        if(global.is_ppob == true){
          Android.sendNudes(JSON.stringify(pembelian_item)) 
        }else{
          const offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.querySelector("#offcanvas-rincian-pembelian"));
          const val_pembelian = Android.sendNudes(JSON.stringify(pembelian_item))
          view_bayar.view_rincian_pembayaran(JSON.parse(val_pembelian))
          offcanvas_rincian_pembeilan.show()
        }
    } catch (error) {
        
    }
}
module.exports = {rincian_pembelian}