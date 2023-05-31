const rupiah = require('../../../globalfunction/formatRupiah.js')
const global = require('../../../layout/template3/global.js')
const setup_view_harga = (data) => {
    const outer_produk = document.getElementById('outter-produk')
    outer_produk.innerHTML = ""
    let get_produk= data.map(data => {
        let detailGrid = global.data_config.grid
        detailGrid = (12/parseInt(detailGrid))
        const {detail} = data
        let get_produk = detail.map(data => {
          let border = ""
          let background = ""
          const {gangguan} = data
          let color_tag = ""
          let color_produk = ""
          let color_exp = ""
          let color_price = ""
          gangguan? (color_tag = "text-muted", color_produk = "text-muted", color_exp = "text-muted", color_price = "text-muted") : (color_tag = "text-dark", color_produk = "text-secondary", color_exp = "text-orange", color_price = "text-dark")
          let view_produk = `<div class="col-${detailGrid} mb-3 view-produk" onclick="set_harga(this)">
            <div class="shadow-sm ${border} ${background} border-radius-8 mx-0 bg-white box-harga">
              <div class="row gx-0">
                <div class="col-12 pt-2 position-relative">
                  <p class="font-large-1 fw-bold ${color_tag} ms-2">${data.tag}</p>
                  <span class="bg-danger position-absolute end-0 top-0 gangguan border-radius-bottom-8 font-small px-2 py-1 text-white me-2-5 ${gangguan? ` ` : ` d-none`}" data-gangguan="${gangguan}">Gangguan</span>
                </div>
                <div class="col-12 pe-0">
                  <p class="font-large ${color_produk} ms-2 keterangan produk" data-produk="${data.produk}">
                    ${data.produk}
                  </p>
                </div>
                <div class="col-7 py-2 pe-0">
                  <p class="font-large ${color_price} ms-2 price" data-harga="${data.harga}">${rupiah.formatRupiah(data.harga,"Rp. ")}</p>
                </div>
                <div class="col-5 ps-0 pe-2 py-2 text-end">
                  <p class="${color_exp} font-large exp" data-exp="${data.exp}">${data.exp}</p>
                  <p class="text-orange font-large kode_produk d-none" data-kode="${data.kode}">${data.kode}</p>
                </div>
              </div>
            </div>
          </div>`
          outer_produk.innerHTML += view_produk
        })
    })
}

module.exports = {setup_view_harga}