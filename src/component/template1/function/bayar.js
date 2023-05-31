const global = require('../../../layout/template1/global.js')
const func_beli = require('../function/data_pembelian.js')
window.bayar = (action) => {
    try {
      const first_pin = document.querySelector('#pin_first')
      if(action === "direct"){
            let check = func_beli.data_pembelian()
            if(check === true){
                global.panchi = ""
                global.panchi = {
                    "pancigedhe" : [],
                    "pincok" : first_pin.value,
                }
                global.pembelian.map(item => {
                  let obj =  {
                      "kode" : item.kode_produk,
                      "tujuan" : item.tujuan,
                      "harga" : item.harga,
                      "produk" : item.produk,
                    }
                  global.panchi.pancigedhe.push(obj)
                })
              Android.panchi(JSON.stringify(global.panchi))
            }
      }else{
          global.panchi.pincok = first_pin.value
          Android.panchi(JSON.stringify(global.panchi))
      }
    } catch (error) {
      console.log(error)
    }
}

module.exports = {
    bayar
}