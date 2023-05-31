const global = require('../../../layout/template4/global.js')
const filterAutocomplete = require('../../../globalfunction/filterAutocomplete.js')
const view_autocomplete = require('../../../globalfunction/view_autocomplete.js')
window.set_autocomplete = (e) => {
    const elAutocomplete = e.parentNode.parentNode.querySelector('.autocomplete')
    const listAutoComplete = e.parentNode.parentNode.querySelector('.list-autocomplete')
    if (e.value.length > 3 && e.value.length < 6) {
        const value = e.value
        const filter_autocomplete = filterAutocomplete.filter(global.data_autocomplete,value)
        view_autocomplete.setup_auto_complete(elAutocomplete,listAutoComplete,filter_autocomplete)
    }else{
        elAutocomplete.classList.add('d-none')
        listAutoComplete.innerHTML = ''
    }
}

module.exports = {
    set_autocomplete,
}
