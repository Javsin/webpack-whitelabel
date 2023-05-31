const global = require("../../../layout/template6/global");

window.resetFilter = () => {
  global.isFilterChange = false;

  global.filterCategory.operator = null;
  global.filterCategory.masaAktif = null;
  global.filterCategory.rangeHarga = null;
  global.filterCategory.rangeKuota = null;
  global.filterCategory.sort = null;
  global.filterCategory.sortAlphabet = null;

  // reset tempInputRange
  global.tempInputRange.minHarga = null;
  global.tempInputRange.maxHarga = null;
  global.tempInputRange.minKuota = null;
  global.tempInputRange.maxKuota = null;
};

module.exports = {
  resetFilter,
};
