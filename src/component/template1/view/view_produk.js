const global = require('../../../layout/template1/global.js')
const funct_hlr = require('../function/cek_hlr.js')
const rupiah = require('../../../globalfunction/formatRupiah.js')
window.off_harga = (e) => {
    let length_nomor = e.parentNode.parentNode.querySelector('.nomor').value
    if(length_nomor.length >= 4){
        global.offcanvas_harga.show()
        let nomor_tag = e.parentNode.parentNode.querySelector('.nomor')
        global.nominal_tag = e.querySelector('.nominal')
        let hlr = funct_hlr.cek_hlr(nomor_tag.value.substr(0,5),"change")
        if(hlr.length > 1){
        hlr = funct_hlr.cek_hlr(nomor_tag.value.substr(0,5),"click")
        }
        setup_view_harga(hlr,e.querySelector('.nominal'))
    }
}

const setup_view_harga = (hlr,elem) => {
    const outer_produk = document.getElementById('outter-produk')
    document.getElementById('set_nominal').disabled = true
    outer_produk.innerHTML = ""
    let detailGrid = global.data_config.grid
    let view_produk = ''
    detailGrid = (12/parseInt(detailGrid))
    let get_produk= hlr.map(data => {
        const {detail} = data
        let detail_produk = detail.map(data => {
            let border = ""
            let background = ""
            let background_2 = ""
            let produk_color = ""
            let exp_color = ""
            let harga_color = ""
            let {gangguan} = data
            gangguan? ( produk_color = "text-muted", exp_color = "text-muted", harga_color = "text-muted") : (produk_color = "text-dark", exp_color = "text-orange", harga_color = "text-dark")
            if(elem.value.length === 0){
                border = ""
                background = ""
                data.isPromo ? background_2 = "background-green": background_2 = "background-gray" 
            }else{
                if(elem.dataset.kode  === data.kode){
                border = "border-orange"
                background = "background-yellow-light"
                data.isPromo ? background_2 = "background-green": background_2 = "background-orange" 
                temp_valueproduk = {
                    "produk": data.produk,
                    "price" : data.harga,
                    "kode_produk" : data.kode,
                    "exp" : data.exp,
                }
                }else{
                border = ""
                background = ""
                data.isPromo ? background_2 = "background-green": background_2 = "background-gray" 
                }
                document.getElementById('set_nominal').disabled = false
            }
            view_produk += `<div class="col-${detailGrid} mb-3" onclick="set_harga(this)">
                <div class="shadow-sm ${border} ${background} border-radius-8 h-100 mx-0 box-harga"> 
                    <div class="row gx-0">
                        <div class="col-12 d-flex justify-content-between">
                            <span class="${background_2} tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5">${data.tag}</span>
                            <span class="bg-danger gangguan border-radius-bottom-8 font-small px-2 py-1 text-white me-2-5 ${gangguan? ` ` : ` d-none`}" data-gangguan="${gangguan}">Gangguan</span>
                        </div>
                        <div class="col-12 py-2">
                            <p class="font-large-1 fw-bold ${produk_color} ms-2 produk" data-produk="${data.produk}">${data.produk}</p>
                        </div>
                        <div class="col-7 py-2 pe-0">
                            <p class="font-large ${harga_color} ms-2 price" data-harga="${data.harga}">${rupiah.formatRupiah(data.harga,'Rp. ') }</p>
                        </div>
                        <div class="col-5 ps-0 pe-2 py-2 text-end">
                            <p class="${exp_color} font-large exp" data-exp="${data.exp}">${data.exp}</p>
                            <p class="${exp_color} font-large kode_produk d-none" data-kode="${data.kode}">${data.kode}</p>
                        </div>
                    </div>
                </div>
            </div>`
        })
    })
    outer_produk.innerHTML = view_produk
}

module.exports = {off_harga}