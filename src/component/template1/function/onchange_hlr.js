const global = require('../../../layout/template1/global.js')
const func_hlr = require('./cek_hlr.js')
const funct_terlaris = require('./cek_terlaris.js')
const view_terlaris = require('../view/view_terlaris.js')
window.setup_auto_complete =  (e,action) => {
    let value_length = e.value.length
    let hlr_not_found = e.parentNode.parentNode.querySelector(".hlr-notfound")
    let operator_label = e.parentNode.parentNode.parentNode.querySelector('.operator-label')
    let this_nominal = e.parentNode.parentNode.parentNode.querySelector('.nominal')
    const main_suggest = document.getElementById('main_suggest')
    const suggest = document.getElementById('suggest')
    global.target_suggest = e.parentNode.parentNode.parentNode.querySelector('.nominal')
    if(action == 'paste'){
      setTimeout(() => {
        let value_number = e.value
        if(e.value.substring(0,2) == '62'){
          value_number = `0${e.value.slice(2)}`
          e.value = value_number
        }
        let hlr = func_hlr.cek_hlr(value_number,"change")
        let terlaris = funct_terlaris.find_terlaris(value_number)
        if(hlr.length != 0){
            let get_operator = hlr.map(data => {
                const {operator} = data
                operator_label.innerHTML = operator
                hlr_not_found.classList.add("d-none")
                reset_nominal(this_nominal)
            })
            terlaris.length > 1 ? terlaris = funct_terlaris.find_terlaris(value_number,"recursive") : ''
            terlaris.map(data => {data.detail.length > 0 ? (view_terlaris.setup_terlaris(terlaris), main_suggest.classList.remove('d-none')):(suggest.innerHTML = '',main_suggest.classList.add('d-none'))})
        }else{
            reset_nominal(this_nominal)
            if(value_number.length > 3){
              hlr_not_found.classList.remove("d-none")
              hlr_not_found.innerHTML = "Operator tidak di temukan"
              main_suggest.classList.add('d-none')
              suggest.innerHTML = ""
            }
        }
      }, 100);
    }else{
      if(value_length > 3 && value_length <= 5){
        let value_number = e.value
        if(e.value.substring(0,2) == '62'){
          value_number = `0${e.value.slice(2)}`
          e.value = value_number
        }
        let hlr = func_hlr.cek_hlr(value_number,"change")
        let terlaris = funct_terlaris.find_terlaris(value_number)
        if(hlr.length != 0){
            let get_operator = hlr.map(data => {
                const {operator} = data
                operator_label.innerHTML = operator
                hlr_not_found.classList.add("d-none")
                reset_nominal(this_nominal)
            })
            terlaris.length > 1 ? terlaris = funct_terlaris.find_terlaris(value_number,"recursive") : ''
            terlaris.map(data => {data.detail.length > 0 ? (view_terlaris.setup_terlaris(terlaris,e), main_suggest.classList.remove('d-none')):(suggest.innerHTML = '',main_suggest.classList.add('d-none'))})
        }else{
            reset_nominal(this_nominal)
            if(value_number.length > 3){
              hlr_not_found.classList.remove("d-none")
              hlr_not_found.innerHTML = "Operator tidak di temukan"
              main_suggest.classList.add('d-none')
              suggest.innerHTML = ""
            }
        }
      }else if(value_length <= 3){
          reset_nominal(this_nominal)
          hlr_not_found.classList.add("d-none")
          operator_label.innerHTML = ""
          main_suggest.classList.add('d-none')
          suggest.innerHTML = ""
      }
    }
}

const reset_nominal = (e) => {
    e.value = ""
    e.dataset.produk = ""
    e.dataset.kode = ""
    e.dataset.exp = ""
    e.dataset.harga = ""
}

module.exports = {
    setup_auto_complete,
}