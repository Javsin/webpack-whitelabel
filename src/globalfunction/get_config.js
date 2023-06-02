//const {config_pdam} = require('./globaldata.js')
// const {config_paket_data} = require('./globalpaketdata.js')
function get_config () {
    // let x = config_pdam()
    // return x
    try {
        const data_config = JSON.parse(Android.getConfig())
        return data_config
    } catch (error) {
        Android.log(error)
    }
}

module.exports = {
    get_config,
};
