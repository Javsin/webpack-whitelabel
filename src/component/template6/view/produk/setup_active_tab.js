const global = require("../../../../layout/template6/global");
const { setup_selected_produk } = require("./setup_selected_produk");

window.setup_active_tab = (element, value) => {
  const active = document.querySelectorAll(".active");
  const activeButton = document.querySelectorAll(".active-outline");

  const produk = global.selectedData.detail;
  const result = [];

  if (global.isFilterChange) {
    global.filteredDataAll.filter((data) => {
      data.kategori.find((item) => {
        if (item === value) {
          result.push(data);
        }
      });
    });
  } else {
    produk.filter((data) => {
      data.kategori.find((item) => {
        if (item === value) {
          result.push(data);
        }
      });
    });
  }

  global.filteredData.detail = result;

  active.forEach((btn) => {
    btn.classList.remove("active");
  });

  activeButton.forEach((btn) => {
    btn.classList.remove("active-outline");
  });

  global.labelTotal.innerHTML = "Rp 0";

  element.classList.add("active");
  setup_selected_produk(global.filteredData.detail);
};

module.exports = {
  setup_active_tab,
};
