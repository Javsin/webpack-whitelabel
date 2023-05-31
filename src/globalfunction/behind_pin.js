const myvar = require('./variable.js')
const get_pin = () => {
    try {
        const checkbox_pin = document.getElementById("switchMaterial")
        const form_pin  = document.getElementById('pin')
        myvar.pin = Android.get_pin()
        if(myvar.pin == ""){
            checkbox_pin.checked = true
            checkbox_pin.readOnly = false
        }else{
            form_pin.readOnly = true 
            checkbox_pin.checked = false
            form_pin.value = myvar.pin
        }
    } catch (error) {
      Android.log(error)
    }
}
  
window.setup_pin = (pin) => {
    const checkbox_pin = document.getElementById("switchMaterial")
    const form_pin  = document.getElementById('pin')
    if(pin == ""){
      checkbox_pin.checked = true
      checkbox_pin.readOnly = false
    }else{
      form_pin.readOnly = true 
      checkbox_pin.checked = false
      form_pin.value = pin
    }
}
  
window.changepin = (e) => {
    const form_pin  = document.getElementById('pin')
    if(e.checked == true){
      let reset = Android.reset_pin()
      form_pin.readOnly = false
      form_pin.value = ""
    }else{
      let value_pin  = form_pin.value
      let set  = Android.set_pin(value_pin,6)
      if(set == true){
        form_pin.readOnly = true
        e.checked = false
      }else{
        form_pin.readOnly = false
        e.checked = true
      }
    }
}

module.exports = {
    get_pin,
    setup_pin,
    changepin
}