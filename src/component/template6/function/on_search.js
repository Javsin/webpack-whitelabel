const global = require("../../../layout/template6/global");
// const { setup_active_tab } = require("../view/produk/setup_active_tab");
const { setup_selected_produk } = require("../view/produk/setup_selected_produk");
// const { resetFilter } = require("./reset_filter");

window.onSearch = (event) => {
  clearTimeout(global.timeout);

  const buttonActive = document.querySelector(".nav-button.active-outline");
  const totalFilter = document.querySelector("#total-filter");
  const value = event.target.value;
  const trimVal = value.trim();

  const dataNotFound = `
  <div class="col-12 text-center">
  <span class="badge bg-danger font-large-1">
    Data Tidak Ditemukan
  </span>
</div>
    `;

  buttonActive?.classList.contains("active-outline") && buttonActive.classList.remove("active-outline");
  let result = [];

  global.timeout = setTimeout(() => {
    if (trimVal.length === 0) {
      setup_active_tab(document.querySelector(".nav-link.active"), "all");
      return;
    } else {
      // addClassName(mainInput, "d-none");
      global.layoutNominal.innerHTML = "";
      global.selectedData.detail.find((item) => {
        if (item.produk.toLowerCase().includes(trimVal.toLowerCase())) {
          result.push(item);
        }
      });
    }

    if (result.length > 0) {
      resetFilter();
      !totalFilter.classList.contains("d-none") && totalFilter.classList.add("d-none");
      setup_selected_produk(result);
    } else {
      global.layoutNominal.innerHTML = dataNotFound;
    }
  }, 500);
};

module.exports = { onSearch };
