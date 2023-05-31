const setup_auto_complete = (elAutocomplete,listAutoComplete,dataAutocomplete) => {
    elAutocomplete.classList.remove('d-none')
    listAutoComplete.innerHTML = ""
    length = dataAutocomplete.length - 1
    if(dataAutocomplete.length > 0){
        dataAutocomplete.map((data,index) => {
            if(length === 0){
                return listAutoComplete.innerHTML += `<div class="text-secondary font-large-1 fw-normal" onclick="set_tujuan_autocomplete(this,'${data.tujuan}')">${data.tujuan}</div>`
            }else{
                return listAutoComplete.innerHTML += `<div class="text-secondary font-large-1 fw-normal" onclick="set_tujuan_autocomplete(this,'${data.tujuan}')">${data.tujuan} ${index !== length ? '<hr class="my-1">':''}</div>`
            }
        })
    }else{
        elAutocomplete.classList.add('d-none')
        return listAutoComplete.innerHTML = ""
    }
}

module.exports = {
    setup_auto_complete,
}