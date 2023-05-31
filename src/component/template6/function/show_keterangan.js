window.title_keterangan = (title) => {
    document.querySelector('.title-multitrx').innerHTML = "Informasi"
    document.querySelector('.isi-multitrx').innerHTML = title
    const offcanvasKeterangan = new bootstrap.Offcanvas(document.getElementById('offcanvasketerangan'))
    offcanvasKeterangan.show()
}

module.exports = {
    title_keterangan,
}