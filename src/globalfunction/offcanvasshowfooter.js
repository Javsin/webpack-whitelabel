window.off_footer = () => {
    document.getElementById('offcanvasketerangan').addEventListener('hidden.bs.offcanvas', function () {
        // do something...
        document.querySelector('#footer').classList.remove('d-none')
    })
}

module.exports = {off_footer}