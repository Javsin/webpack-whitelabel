const global = require('../../../layout/template1/global.js')
const view = require('../view/viewrincianbayar.js')
const funct_beli = require('../function/data_pembelian.js')
window.rincian_pembelian = () => {
    const outter_check_out = document.getElementById('outter-check-out')
    outter_check_out.innerHTML = ""
    global.pembelian = []
    let offcanvas_rincian_pembeilan = new bootstrap.Offcanvas(document.getElementById('offcanvasRincianPembelian'))
    let isValid =  funct_beli.data_pembelian()
    if(isValid === true){
      try {
        const val_pembelian = Android.sendNudes(JSON.stringify(global.pembelian))
        view.view_rincian_pembayaran(JSON.parse(val_pembelian))
        offcanvas_rincian_pembeilan.show()
      } catch (error) {
        console.log(error)
      }
    }
}

