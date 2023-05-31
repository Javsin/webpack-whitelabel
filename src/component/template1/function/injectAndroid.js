const global = require('../../../layout/template1/global.js')
const func_change = require('./onchange_hlr.js')
const rupiah = require('../../../globalfunction/formatRupiah.js')
window.kontak = (e) => {
    try {
      global.element_kontak = ''
      let set = Android.get_kontak()
      global.element_kontak =  e.parentNode.querySelector('.nomor')
    } catch (error) {
      console.log(error)
    }
}

window.scan = (e) => {
    try {
      global.element_kontak = ''
      let set = Android.get_kontak_scan()
      global.element_kontak =  e.parentNode.querySelector('.nomor')
    } catch (error) {
      
    }
  }
  
window.informasi_pin = () => {
    try {
      Android.dialogInfoPin()
    } catch (error) {
      
    }
}

window.set_kontak = (kontak) => {
    if(global.element_kontak ==  ''){
      let el = document.querySelector('.nomor')
      el.value = kontak
      func_change.setup_auto_complete(el,'paste')
    }else{
      global.element_kontak.value = kontak
      func_change.setup_auto_complete(global.element_kontak,'paste') 
    } 
}

window.set_produk = (produk) => {
    setTimeout(() => {
      let filter  = ''
      let el = document.querySelector('.nominal')
      const total_bottom = document.getElementById('total-bottom')
      const footer = document.querySelector('#footer')
      global.data_produk.map((item) => {
        item.detail.find((item) => {
          Android.log('logset_produk'+item.kode)
          item.kode ? item.kode === produk ? filter = item : '' : ''
        })
      })
      el.dataset.produk = filter.produk
      el.dataset.harga = filter.harga
      el.dataset.kode = filter.kode
      el.dataset.exp = filter.exp
      el.value = filter.produk
      footer.classList.remove('d-none')
      total_bottom.innerHTML = `Rp. ${rupiah.formatRupiah(filter.harga)}`
    }, 100);
}

module.exports = {
    kontak,
    set_kontak,
    scan,
    informasi_pin
}

