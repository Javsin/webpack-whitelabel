window.title_keterangan = (title) => {
    document.querySelector('.title-multitrx').innerHTML = "Informasi"
    document.querySelector('.isi-multitrx').innerHTML = title
    const offcanvasKeterangan = new bootstrap.Offcanvas(document.getElementById('offcanvasketerangan'))
    offcanvasKeterangan.show()
    document.querySelector('#footer').classList.add('d-none')
}

module.exports = {
    title_keterangan,
}