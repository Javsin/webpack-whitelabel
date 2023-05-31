window.set_kontak = (kontak) => {
    document.querySelector('.nomor').value = kontak
}

window.informasi_pin = () => {
    try {
        Android.dialogInfoPin()
    } catch (error) {

    }
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

module.exports = {
    kontak,
    scan,
    informasi_pin,
    set_kontak
}