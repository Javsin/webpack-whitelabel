const global = require("../../../layout/template6/global");
const { setup_button } = require("../view/produk/setup_button");
// const { setup_active_tab } = require("../view/produk/setup_active_tab");
const { toCapitalizeFirstLetter } = require("../../../globalfunction/capitalize_letter");
const { scrollTo } = require("../../../globalfunction/scroll_to");

const toMegaByte = (number) => {
  const result = number * 1000;
  return result;
};

const onFilter = (value) => {
  let result;
  let dataButton;
  const labelNomor = document.querySelector("#label-nomor-operator");
  const inputNomor = document.querySelector("#input-nomor");
  const allTab = document.querySelectorAll(".nav-link");
  const tabActive = document.querySelector(".nav-link.active");
  const buttonActive = document.querySelector(".nav-button.active-outline");

  tabActive?.classList.contains("active") && tabActive.classList.remove("active");
  buttonActive?.classList.contains("active-outline") && buttonActive.classList.remove("active-outline");

  allTab.forEach((tab, index) => {
    if (index === 0) {
      tab.classList.add("active");
    }
  });

  // reset value from result filter
  result = {};

  if (value.operator === undefined || value.operator === null) {
    if (global.filterComponent.querySelector(".alert") !== null) {
      global.filterComponent.querySelector(".alert").remove();
    }
    const alert = ` 
      <div class="alert alert-danger alert-dismissible fade show mb-2 border-radius-8" role="alert">
        <strong>Error!</strong> Yaah, operator harus diisi, kemudian klik tombol <strong>Terapkan</strong> kak! 😉
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      `;
    document.querySelector("#content-offcanvas-filter").insertAdjacentHTML("beforebegin", alert);
    scrollTo(global.filterComponent.querySelector(".offcanvas-body"), 0, 100);
    return;
  } else {
    global.rawData.produk.filter((data) => {
      if (data.for_filteroperator === value.operator) {
        global.selectedData = data;
        result = data.detail;
        dataButton = data.tagging;
      }
    });
  }

  if ((value.range_kuota[0] !== null && value.range_kuota[1] === null) || (value.range_kuota[0] === null && value.range_kuota[1] !== null)) {
    return alert("Semua kolom kuota harus diisi!");
  } else {
    if (value.range_kuota[0] !== null && value.range_kuota[1] !== null) {
      result = result.filter((data) => {
        return data.kuota >= toMegaByte(value.range_kuota[0]) && data.kuota <= toMegaByte(value.range_kuota[1]);
      });
    }
  }

  if ((value.range_harga[0] !== null && value.range_harga[1] === null) || (value.range_harga[0] === null && value.range_harga[1] !== null)) {
    return alert("Semua kolom harga harus diisi!");
  } else {
    if (value.range_harga[0] !== null && value.range_harga[1] !== null) {
      result = result.filter((data) => {
        return data.harga >= value.range_harga[0] && data.harga <= value.range_harga[1];
      });
    }
  }

  // if (value.kuota !== undefined) {
  //   const isBigger = value.kuota.includes(">");
  //   const isUnlimited = value.kuota.includes("Unlimited");

  //   if (isUnlimited) {
  //     result = result.filter((data) => {
  //       return data.kuota == 0;
  //     });
  //   } else if (isBigger) {
  //     result = result.filter((data) => {
  //       return data.kuota >= +value.kuota.split(">")[1];
  //     });
  //   } else {
  //     result = result.filter((data) => {
  //       return data.kuota <= +value.kuota;
  //     });
  //   }
  // }

  if (value.masa_aktif !== undefined) {
    result = result.filter((data) => {
      return data.filter_masaaktif === value.masa_aktif;
    });
  }

  // if (value.minHarga !== null) {
  //   result = result.filter((data) => {
  //     return data.harga >= value.minHarga;
  //   });
  //   if (value.maxHarga !== null) {
  //     result = result.filter((data) => {
  //       return data.harga <= value.maxHarga;
  //     });
  //   }
  // }

  if (value.urutan !== undefined) {
    // sort result by harga asc
    if (value.urutan === "Harga Terendah") {
      result = result.sort((a, b) => {
        return a.harga - b.harga;
      });
    } else if (value.urutan === "Harga Tertinggi") {
      result = result.sort((a, b) => {
        return b.harga - a.harga;
      });
    } else if (value.urutan === "Produk Terlaris") {
      result = result.sort((a, b) => {
        return b.terlaris - a.terlaris;
      });
    } else if (value.urutan === "Kuota Terendah") {
      result = result.sort((a, b) => {
        return a.kuota - b.kuota;
      });
    } else if (value.urutan === "Kuota Terbanyak") {
      result = result.sort((a, b) => {
        return b.kuota - a.kuota;
      });
    } else if (value.sort_by_abjad === "Nama Produk A - Z") {
      result = result.sort((a, b) => {
        return a.produk.localeCompare(b.produk);
      });
    } else if (value.sort_by_abjad === "Nama Produk Z - A") {
      result = result.sort((a, b) => {
        return b.produk.localeCompare(a.produk);
      });
    }
  }

  if (value.sort_by_abjad !== undefined) {
    if (value.sort_by_abjad === "Nama Produk A - Z") {
      result = result.sort((a, b) => {
        return a.produk.localeCompare(b.produk);
      });
    } else if (value.sort_by_abjad === "Nama Produk Z - A") {
      result = result.sort((a, b) => {
        return b.produk.localeCompare(a.produk);
      });
    }
  }

  global.filteredDataAll = result;
  global.isFilterChange = true;
  inputNomor.value = "";
  labelNomor.innerHTML = toCapitalizeFirstLetter(global.selectedData.for_filteroperator);

  setup_button(dataButton);
  setup_active_tab(document.querySelector(".nav-link.active"), "all");
  // !footer.classList.contains("d-none") && (footer.classList.add("d-none"), (layoutNominal.parentElement.style.height = "65vh"));
  global.offcanvasFilter.hide();
};

module.exports = {
  onFilter,
};
