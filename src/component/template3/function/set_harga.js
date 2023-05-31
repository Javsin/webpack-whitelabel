const global = require('../../../layout/template3/global.js')
window.set_harga = (event) => {
    const total_bottom = document.getElementById('total-bottom')
    const nomor = document.querySelector('.nomor')
    total_bottom.innerHTML = ""
    const produk = event.querySelector('.produk')
    const box_harga = event.querySelector('.box-harga')
    const price = event.querySelector('.price')
    const exp = event.querySelector('.exp')
    const kode_produk = event.querySelector('.kode_produk')
    const gangguan = event.querySelector('.gangguan').dataset.gangguan
    const remove_active = document.getElementsByClassName('box-harga')
    if(gangguan === 'true'){
      Android.showDialog("Maaf, produk sedang gangguan")
    }else{
      for(let i = 0; i < remove_active.length; i++){
          remove_active[i].classList.remove('border-orange','background-yellow-light')
      }
      box_harga.classList.add('background-yellow-light','border-orange')
      total_bottom.innerHTML = formatRupiah(price.dataset.harga,'Rp. ')
      global.temp_valueproduk = {
        "produk": produk.dataset.produk,
        "price" : price.dataset.harga,
        "kode_produk" : kode_produk.dataset.kode,
        "exp" : exp.dataset.exp,
        "nomor" : nomor.value,
      }
    }
}
module.exports = {set_harga}