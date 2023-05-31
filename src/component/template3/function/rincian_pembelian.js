const global = require('../../../layout/template3/global.js')
const view_bayar = require('../view/viewrincianbayar.js')
window.rincian_pembelian = () => { 
    const nomor = document.querySelector('.nomor')
    const error_notif = document.querySelector('.error_number')
    const outter_check_out = document.getElementById('outter-check-out')
    outter_check_out.innerHTML = ""
    let isValid = true
    if(nomor.value.length > 0){
      error_notif.classList.add('d-none')
      if(global.temp_valueproduk.length === 0){
          error_notif.innerHTML = "Pilih produknya dulu"  
          error_notif.classList.remove('d-none')
          isValid = false
      }
    }else if(nomor.value.length == 0){
        error_notif.innerHTML = `Isi ${global.data_config.settingTujuan.title} terlebih dahulu`  
        error_notif.classList.remove('d-none')
        isValid = false
    }
  
    if(isValid == true){
        let pembelian_item = {
            "tujuan" : nomor.value,
            "produk" : global.temp_valueproduk.produk,
            "harga" : global.temp_valueproduk.price,
            "kode_produk" : global.isppob == true ? global.temp_valueproduk.kode_produk.replace('BYR','CEK' ) : global.temp_valueproduk.kode_produk,
            "exp" :  global.temp_valueproduk.exp,
            "title" : global.data_config.judul
        }
        try {
            if(global.isppob == true){
                Android.sendNudes(JSON.stringify(pembelian_item))
            }else{
                const offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'))
                const val_pembelian = Android.sendNudes(JSON.stringify(pembelian_item))
                view_bayar.view_rincian_pembayaran(JSON.parse(val_pembelian))
                offcanvas_rincian_pembeilan.show()
            }
        } catch (error) {
            
        }
    }
}

module.exports = {rincian_pembelian}
  