const {data_autocomplete} = require('./globaldata.js')

function get_autocomplete (){
    // try {
    //     const data_tujuan = JSON.parse(Android.getAutotujuan())
    //     return data_tujuan
    // } catch (error) {
    //     Android.log(error)
    // }
    let x = data_autocomplete()
    return x
}

module.exports = {
    get_autocomplete,
}