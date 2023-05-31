const global = require('../../../layout/template8/global.js')
const setupview = (data) => {
    const {is_klaim,snk,image} = data
    const info = document.getElementById('text-info')
    info.innerHTML = ''
    if (is_klaim === false) {
        global.offcanvas = new bootstrap.Offcanvas(document.getElementById('offsnk'))
        info.innerHTML = snk
        global.offcanvas.show()
    }
    document.getElementById('imgpartnership').src = image
}

module.exports = {
    setupview
}