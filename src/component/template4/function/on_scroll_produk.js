window.scroll_produk = (scrolling) => {
    const mainInput = document.querySelector("#main-input");
    const headTitle = document.querySelector("body").querySelector("#head-title");
    if (scrolling.scrollTop === 0) {
        headTitle.classList.remove("d-none");
        mainInput.classList.add("min-margin-top-min");
        mainInput.classList.remove("min-margin-top-min-2");
    } else {
        headTitle.classList.add("d-none");
        mainInput.classList.add("min-margin-top-min-2");
        mainInput.classList.remove("min-margin-top-min");
    }
}

module.exports = {scroll_produk}