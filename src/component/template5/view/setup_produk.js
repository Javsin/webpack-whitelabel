const global = require('../../../layout/template5/global.js')
const setup_produk = (search) => {
    const outter_produk = document.getElementById('outter-produk')
    let produk = global.data_produk[0].detail
    let filter_produk = produk.filter(item => {
      return item.produk.toLowerCase().includes(search.toLowerCase())
    })
    let html = ''
    let checked = ''
    filter_produk.map(item => {
      checked = ''
      if(item.kode == global.temp_produk){
        checked = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg text-success" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>`
      }
      html += 
      `<div class="bg-white py-3 px-0 border-bottom" onclick="set_produk(this)">
        <div class="row"> 
          <div class="col-10">
            <p class="text-secondary font-large fw-500" data-kode='${item.kode}' data-produk ='${item.produk}' data-xp='${item.exp}' data-harga='${item.harga}'>${item.produk}</p> 
          </div>
          <div class="col-2 text-center">
            ${checked}
          </div>
        </div>
      </div>`
    })
    outter_produk.innerHTML = html
}
module.exports = {setup_produk}