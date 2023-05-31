const myvar = require('./variable.js')
const get_pin = () => {
    try {
      const first_pin  = document.getElementById('pin_first')
      const checkbox_pin_first = document.getElementById("switchMaterial2")
      const button_rincian = document.getElementById('set_rincian_pembelian')
      myvar.pin = Android.get_pin()
      if(myvar.pin == ""){
        checkbox_pin_first.checked = true
        checkbox_pin_first.readOnly = false
        button_rincian.disabled = true
      }else{
        first_pin.readOnly = true 
        checkbox_pin_first.checked = false
        first_pin.value = myvar.pin
      }
    } catch (error) {
      console.log(error)
    }
}


window.changepin = (e) => {
    const first_pin  = document.getElementById('pin_first')
    const button_rincian = document.getElementById('set_rincian_pembelian')
    if(e.checked == true){
      let reset = Android.reset_pin()
      first_pin.readOnly = false
      first_pin.value = ""
      button_rincian.disabled = true
    }else{
      let value_pin  = first_pin.value
      let set  = Android.set_pin(value_pin,6)
      if(set == true){
        first_pin.readOnly = true
        e.checked = false
      }else{
        first_pin.readOnly = false
        e.checked = true
      }
    }
}

window.validate_pin = (e) => {
    const button_rincian = document.getElementById('set_rincian_pembelian')
    setTimeout(() => {
      if(e.value.length == 6){
        button_rincian.disabled = false
      }else{
        button_rincian.disabled = true
      }
    }, 100);
}
module.exports = {
    get_pin,
    changepin,
    validate_pin
}