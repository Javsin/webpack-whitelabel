const global = require('../../../layout/template8/global')
window.nextevent = () => {
    const radio = document.querySelector('input[name="flexRadioDefault"]')
    try {
        if(radio.checked === true){
            global.offcanvas.hide()
            Android.nextevent()
        }else {
            Android.showDialog("Anda belum menyetujui syarat dan ketentuan");
        }
    } catch (error) {
        
    }
}

window.openWebPartner = () => {
    try {
        Android.openWebPartner()
    } catch (error) {
        
    }
}

window.sharePartner = () => {
    try {
        Android.sharePartner()
    } catch (error) {
       
    }
}

window.savePartner = () => {
    try {
        Android.savePartner()
    } catch (error) {
     
    }
}

window.setImagepartnership = (image) => {
    document.getElementById('imgpartnership').src = image
}

module.exports = {
    nextevent,
    openWebPartner,
    sharePartner,
    savePartner,
    setImagepartnership
}