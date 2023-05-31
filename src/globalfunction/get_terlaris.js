//const data = require('./globaldata.js')
function get_terlaris (){
    // let x = data.config_terlaris()
    // return x
    let produk = ''
    try {
      produk = JSON.parse(Android.getJsonProdukTerlaris()) 
      return produk
    } catch (error) {
      
    }
}

module.exports = {
  get_terlaris,
}