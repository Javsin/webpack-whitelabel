window.set_tujuan_autocomplete = (e,tujuan) => {
    const view_autocomplete = e.parentNode.parentNode
    const input = e.parentNode.parentNode.parentNode.querySelector('input')
    input.value = tujuan
    view_autocomplete.classList.add('d-none')
}

module.exports = {
    set_tujuan_autocomplete,
}