window.scroll_produk = (scrolling) => {
    const main_input = document.getElementById('main-input')
    if(scrolling.scrollTop === 0){
      main_input.classList.add('min-margin-top-min-oneform')
      main_input.classList.remove('min-margin-top-min-oneform-2')
    }else{
      main_input.classList.add('min-margin-top-min-oneform-2')
      main_input.classList.remove('min-margin-top-min-oneform')
    }
}

module.exports = {scroll_produk}