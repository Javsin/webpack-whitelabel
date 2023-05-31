
const setup_terlaris = (data) => {
    const suggest = document.getElementById('suggest')
    let html = ""
    data.map((terlaris) => {
      terlaris.detail.map((detail) => {
        return html += `
        <div class="col-6 mb-3 px-1" data-produk="${detail.produk}" data-harga="${detail.harga}" data-exp="${detail.exp}" data-kode="${detail.kode}" onclick="set_terlaris(this)">
            <div class="shadow-sm border-radius-8 h-100 mx-0 box-harga bg-white"> 
                <div class="row gx-0">
                    <div class="col-12">
                        <span class="background-gray tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5">${detail.tag}</span>
                    </div>
                    <div class="col-12 py-2">
                        <p class="font-large fw-bold text-dark ms-2 produk">${detail.produk}</p>
                    </div>
                    <div class="col-7 py-2 pe-0">
                        <p class="font-medium text-dark ms-2 price">${formatRupiah(detail.harga,'Rp. ') }</p>
                    </div>
                    <div class="col-5 ps-0 pe-2 py-2 text-end">
                        <p class="text-orange font-medium exp">${detail.exp}</p>
                        <p class="text-orange font-medium kode_produk d-none">${detail.kode}</p>
                    </div>
                </div>
            </div>
        </div>`
      })
    }) 
    suggest.innerHTML = html 
}

module.exports = {
    setup_terlaris
}