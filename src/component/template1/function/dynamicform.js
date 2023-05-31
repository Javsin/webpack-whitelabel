const global = require('../../../layout/template1/global.js')
const nomor = document.getElementsByClassName('nomor')
const nominal = document.getElementsByClassName('nominal')
window.add_form = (el) => {
    const button_add_form = document.getElementById('add-form')
    let isValid = true
    if(global.dynamic < 5){
      if(global.dynamic === 4) button_add_form.classList.add('d-none') 
      let total_nomor = nomor.length
      const error_nomor = document.getElementsByClassName('hlr-notfound')
      const error_produk = document.getElementsByClassName('produk-notfound')
      for(let i = 0; i < total_nomor; i++){
        if(nomor[i].value ===''){
          isValid = false
          error_nomor[i].classList.remove('d-none')
          error_nomor[i].innerHTML = 'Isi nomornya dulu'
        }
        if(nominal[i].value === '' || nominal[i].dataset.produk === ''){
          isValid = false
          error_produk[i].classList.remove('d-none')
          error_produk[i].innerHTML = 'Isi produknya dulu'
        }
      }
      if(isValid == true){
        global.dynamic = global.dynamic + 1
        let total_nomor = nomor.length
        set_dynamic_data(total_nomor)
        setTimeout(() => {
            el.scrollIntoView({behavior: 'smooth'})  
        }, 300);
      }
    }
}
window.remove_form = (remove) => {
    const button_add_form = document.getElementById('add-form')
    global.dynamic = global.dynamic - 1
    if(global.dynamic <= 4) button_add_form.classList.remove('d-none')
    remove.parentNode.parentNode.parentNode.remove()
    let total_nomor = nomor.length
    set_dynamic_data(total_nomor)
    for(let i = 0; i < global.dynamic; i++){
        if(nomor[i].value === '' || nominal[i].value === ''){
            // footer.classList.add('d-none')
            break 
        }else{
            // footer.classList.remove('d-none')
        }
    }
}

const set_dynamic_data = (total_nomor) => {
    const main_input = document.getElementById('main-input')
    const outer_dynamic_form = document.getElementById('dynamic-form')
    let data_dynamic = []
    let label_operator = document.getElementsByClassName('operator-label')
    for(let i = 0; i < total_nomor; i++){
        let data = {
            "nomor": nomor[i].value,
            "nominal" : nominal[i].value,
            "produk" :  nominal[i].dataset.produk,
            "price" : nominal[i].dataset.harga,
            "exp" : nominal[i].dataset.exp,
            "kode_produk" : nominal[i].dataset.kode,
            "operator" : label_operator[i].textContent,
        }
        data_dynamic.push(data)
    }
    outer_dynamic_form.innerHTML = ''
    for(let i = 0; i < global.dynamic; i++){
        if(i === 0){
            if (global.dynamic === 1){
                main_input.classList.add('min-margin-top-min')
                main_input.classList.remove('min-margin-top-min-2')
                outer_dynamic_form.innerHTML += global.dynamic_form_1
            }else{
                main_input.classList.remove('min-margin-top-min')
                main_input.classList.add('min-margin-top-min-2')
                outer_dynamic_form.innerHTML += global.dynamic_form_2
            }
        }else{
            outer_dynamic_form.innerHTML += global.dynamic_form_3
        }
    }
    for(let i = 0; i < data_dynamic.length; i++){
        nomor[i].value = data_dynamic[i].nomor
        nominal[i].value = data_dynamic[i].nominal
        nominal[i].dataset.produk = data_dynamic[i].produk
        nominal[i].dataset.harga = data_dynamic[i].price
        nominal[i].dataset.kode = data_dynamic[i].kode_produk
        nominal[i].dataset.exp = data_dynamic[i].exp
        label_operator[i].innerHTML += data_dynamic[i].operator
    }
}

module.exports = {
    add_form,
    remove_form
}