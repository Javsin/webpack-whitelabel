const global = require("../../../layout/template6/global");
const { scrollTo } = require("../../../globalfunction/scroll_to");
const { onHold } = require("./on_hold");

const checkIsPinned = (value) => {
  const activeTab = document.querySelector(".nav-link.active");
  const valueTab = activeTab.innerHTML.toLowerCase();
  document.querySelectorAll(".card-produk").forEach((element) => {
    element.addEventListener("long-press", () => {
      element.querySelector(".pin").classList.toggle("d-none");
      const kodeProduk = element.querySelector(".kode").dataset.kode;

      if (global.isFilterChange) {
        global.filteredDataAll.find((data) => {
          if (data.kode === kodeProduk) {
            if (element.querySelector(".pin").classList.contains("d-none")) {
              data.ispinned = false;
            } else {
              data.ispinned = true;
            }
          }
        });

        global.filteredDataAll.sort((a, b) => {
          if (a.ispinned && !b.ispinned) {
            return -1;
          } else if (!a.ispinned && b.ispinned) {
            return 1;
          } else {
            return 0;
          }
        });
      }

      global.rawData.produk.map((data) => {
        data.detail.find((item) => {
          if (item.kode === kodeProduk) {
            if (element.querySelector(".pin").classList.contains("d-none")) {
              item.ispinned = false;
            } else {
              item.ispinned = true;
            }
            // console.log(item);
          }
        });
      });

      global.rawData.produk.map((data) => {
        data.detail.sort((a, b) => {
          // sort based on ispinned true or false
          if (a.ispinned === true && b.ispinned === false) {
            return -1;
          } else if (a.ispinned === false && b.ispinned === true) {
            return 1;
          } else {
            return 0;
          }
        });
      });

      const result = global.rawData.produk.find((produk) => {
        const { for_filteroperator } = produk;
        if (for_filteroperator === value) {
          return produk;
        }
      });
      // console.log(result);
      global.selectedData = result;
      setup_active_tab(activeTab, valueTab);
      onHold(kodeProduk);
    });
  });

  // scroll to top layout-nominal smooth
  scrollTo(global.layoutNominal.parentElement, 0, 300);
};

module.exports = {
  checkIsPinned,
};
