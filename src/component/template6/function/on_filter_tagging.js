const global = require("../../../layout/template6/global");
const { setup_selected_produk } = require("../view/produk/setup_selected_produk");

const onFilterTagging = (value) => {
  const result = [];

  if (global.isFilterChange) {
    global.filteredDataAll.filter((data) => {
      if (data.tag_filter === value) {
        result.push(data);
      }
    });
  } else if (global.filteredData?.detail !== undefined || global.filteredData?.detail?.length !== 0) {
    global.filteredData.detail.filter((data) => {
      if (data.tag_filter === value) {
        result.push(data);
      }
    });
  }

  global.filteredDataByTag.detail = result;
  global.labelTotal.innerHTML = "Rp 0";
  setup_selected_produk(global.filteredDataByTag.detail);
};

module.exports = {
  onFilterTagging,
};
