window.title_keterangan = (title) => {
    document.querySelector('.title-multitrx').innerHTML = "Informasi"
    document.querySelector('.isi-multitrx').innerHTML = title
    const offcanvasKeterangan = new bootstrap.Offcanvas(document.getElementById('offcanvasketerangan'))
    offcanvasKeterangan.show()
    document.querySelector('#footer').classList.add('d-none')
}

window.multi_keterangan = () => {
    document.querySelector('.title-multitrx').innerHTML = "Multi Transaksi"
    document.querySelector('.isi-multitrx').innerHTML = "Isi pulsa secara bersamaan dengan Nomor dan nominal berbeda dalam sekali transaksi."
    const offcanvasKeterangan = new bootstrap.Offcanvas(document.getElementById('offcanvasketerangan'))
    offcanvasKeterangan.show()
    document.querySelector('#footer').classList.add('d-none')
}

module.exports = {
    title_keterangan,
    multi_keterangan
}


