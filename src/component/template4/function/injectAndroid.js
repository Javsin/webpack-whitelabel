const global = require('../../../layout/template4/global.js')
window.set_kontak = (kontak) => {
    let element_kontak = document.querySelector('.nomor')
    element_kontak.value = kontak
    global.storedData.tujuan = kontak
}
  
window.kontak = (e) => {
    try {
      let set = Android.get_kontak()
    } catch (error) {
      
    }
}
  
window.scan = (e) => {
    try {
      let set = Android.get_kontak_scan()
    } catch (error) {
      
    }
}

window.informasi_pin = () => {
  try {
    Android.dialogInfoPin()
  } catch (error) {
    
  }
}

window.routetocekemoney = () => {
  try {
    Android.routetocekemoney()
  } catch (error) {

  }
}


module.exports = {set_kontak,kontak,scan,informasi_pin,routetocekemoney}