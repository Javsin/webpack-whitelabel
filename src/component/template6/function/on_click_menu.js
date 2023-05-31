const global = require("../../../layout/template6/global");
const { toCapitalizeFirstLetter } = require("../../../globalfunction/capitalize_letter");
const { setup_tab } = require("../view/produk/setup_tab");
const { setup_button } = require("../view/produk/setup_button");
const { setup_navigation_filter } = require("../view/produk/setup_navigation_filter");
// const { setup_active_tab } = require("../view/produk/setup_active_tab");

window.onClickMenu = (value) => {
  Android.log("onClickMenu" + value);
  const headTitle = document.querySelector("#head-title");
  const inputNomor = document.querySelector("#input-nomor");

  global.show_bottom_nav = true;

  const selectedProduk = global.rawData.produk.find((produk) => {
    const { for_filteroperator } = produk;
    if (for_filteroperator === value) {
      return produk;
    }
  });

  global.filterCategory.operator = value;
  global.selectedData = selectedProduk;

  const dataTab = global.rawData.menu;
  const dataButton = selectedProduk.tagging;

  const labelNomorOperator = document.querySelector("#label-nomor-operator");

  document.querySelector("#app").classList.add("d-none");
  document.querySelector("#loading").classList.remove("d-none");

  setTimeout(() => {
    inputNomor.removeAttribute("onkeyup");
    inputNomor.setAttribute("onkeyup", "onChangeNomor(event)");

    document.querySelector("#loading").classList.add("d-none");
    document.querySelector("#app").classList.remove("d-none");

    global.mainInput.classList.remove("min-margin-top-min-3");
    global.mainInput.classList.add("min-margin-top-min-4");
    headTitle.classList.add("d-none");

    global.layoutNominal.innerHTML = "";
    labelNomorOperator.innerHTML = toCapitalizeFirstLetter(value);

    setup_tab(dataTab);
    setup_button(dataButton);
    setup_navigation_filter();
    setup_active_tab(document.querySelector(".nav-link.active"), "all");
    global.footer.classList.remove("d-none");
    // checkIsPinned(value);
  }, 1500);
};

module.exports = { onClickMenu };
