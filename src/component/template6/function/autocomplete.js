const global = require("../../../layout/template6/global");
const { setup_button } = require("../view/produk/setup_button");
const { setup_tab } = require("../view/produk/setup_tab");
const { setup_navigation_filter } = require("../view/produk/setup_navigation_filter");
const {onClickProduk} = require("./on_click_produk");
// const { setup_active_tab } = require("../view/produk/setup_active_tab");
const { toCapitalizeFirstLetter } = require("../../../globalfunction/capitalize_letter");


const cek_hlr = (inp) => {
  const { rawData } = global;
  const data_peroperator = rawData.produk;
  let hlr = [];
  data_peroperator.map((data) => {
    data.hlr.split(",").find((findhlr) => {
      let x = inp.includes(findhlr);
      if (x === true) {
        hlr.push(data);
      }
    });
  });
  return hlr;
};

window.setup_auto_complete = (e) => {
  const headTitle = document.querySelector("#head-title");
  const inputNomor = document.querySelector("#input-nomor");
  const value_length = e.value.length;
  const hlr_not_found = e.parentNode.parentNode.querySelector(".hlr-notfound");
  const operator_label = e.parentNode.parentNode.parentNode.querySelector(".operator-label");

  if (e.value.substring(0, 2) == "62") {
    let value_number = `0${e.value.slice(2)}`;
    e.value = value_number;
  }

  if ((value_length > 3 && value_length <= 4) || value_length !== 0) {
    const hlr = cek_hlr(e.value);
    global.selectedData = hlr[0];
    // document.querySelector("#app").classList.add("d-none");
    // document.querySelector("#loading").classList.remove("d-none");

    if (hlr.length != 0) {
      hlr.map((data) => {
        const { for_filteroperator } = data;
        operator_label.innerHTML = toCapitalizeFirstLetter(for_filteroperator);
        global.filterCategory.operator = for_filteroperator;
        hlr_not_found.classList.add("d-none");
      });

      setTimeout(() => {
        // document.querySelector("#loading").classList.add("d-none");
        // document.querySelector("#app").classList.remove("d-none");
        global.show_bottom_nav = true;
        global.footer.classList.remove("d-none");
      }, 100);

      const dataTab = global.rawData.menu;
      const dataButton = global.selectedData.tagging;
      inputNomor.removeAttribute("onkeyup");
      inputNomor.setAttribute("onkeyup", "onChangeNomor(event)");
      headTitle.classList.add("d-none");
      global.layoutNominal.innerHTML = "";

      setup_tab(dataTab);
      setup_button(dataButton);
      setup_navigation_filter();
      setup_active_tab(document.querySelector(".nav-link.active"), "all");

      try {
        let produk = Android.getprodukfromhistory()
        if(produk !== null || produk !== '') {
            let el = document.querySelectorAll('.card-produk')[0]
            let kode = el.querySelector('.kode').getAttribute('data-kode')
            if(kode === produk) {
                onClickProduk(el,'')
            }
        }
      } catch (error) {

      }
    } else {
      document.querySelector("#loading").classList.add("d-none");
      document.querySelector("#app").classList.remove("d-none");
      if (value_length >= 4) {
        hlr_not_found.classList.remove("d-none");
        hlr_not_found.innerHTML = "Nomor Tidak Valid Kak! 😢";
      }
    }
  } else if (value_length <= 3) {
    hlr_not_found.classList.add("d-none");
    operator_label.innerHTML = "";
  }
};

module.exports = {
  setup_auto_complete,
};
