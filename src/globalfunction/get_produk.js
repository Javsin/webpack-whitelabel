// const {data_telponsms} = require('./globaldata.js')
//const {data_paket_data} = require('./globalpaketdata.js')
function get_data () {
    // let x = data_paket_data()
    // return x
    let produk = ''
    try {
      produk = JSON.parse(Android.getJsonProduk()) 
    return produk
    } catch (error) {
    
    }
}
module.exports = {
  get_data,
};
