const global = require("../../../layout/template6/global");
const { onFilter } = require("./on_filter");
const { toNumber } = require("../../../globalfunction/to_number");
const { isNull } = require("../../../globalfunction/is_null");

window.onSubmitFilter = (element, event) => {
  event.preventDefault();
  const totalFilter = document.querySelector("#total-filter");
  const elements = element.querySelectorAll(".active-outline");
  const filter = {};

  elements.forEach((element) => {
    const value = element.dataset.value;
    const className = element.classList[element.classList.length - 2];
    if (value !== "") {
      filter[className] = value;
    } else {
      filter[className] = null;
    }
  });

  // filter.minHarga = element.querySelector("#min-harga").value ? +element.querySelector("#min-harga").value : null;
  // filter.maxHarga = element.querySelector("#max-harga").value ? +element.querySelector("#max-harga").value : null;
  // filterCategory.rangeKuota = filter.range_kuota;
  // filterCategory.rangeHarga = filter.range_harga;

  global.tempInputRange.minHarga = element.querySelector("#min-harga").value ? toNumber(element.querySelector("#min-harga").value) : null;
  global.tempInputRange.maxHarga = element.querySelector("#max-harga").value ? toNumber(element.querySelector("#max-harga").value) : null;
  global.tempInputRange.minKuota = element.querySelector("#min-kuota").value ? +element.querySelector("#min-kuota").value : null;
  global.tempInputRange.maxKuota = element.querySelector("#max-kuota").value ? +element.querySelector("#max-kuota").value : null;

  filter.range_harga = [global.tempInputRange.minHarga, global.tempInputRange.maxHarga];
  filter.range_kuota = [global.tempInputRange.minKuota, global.tempInputRange.maxKuota];

  onFilter(filter);

  global.filterCategory.operator = filter.operator === undefined ? null : filter.operator;
  global.filterCategory.masaAktif = filter.masa_aktif === undefined ? null : filter.masa_aktif;
  global.filterCategory.sort = filter.urutan === undefined ? null : filter.urutan;
  global.filterCategory.rangeKuota = isNull(filter.range_kuota) ? null : filter.range_kuota;
  global.filterCategory.rangeHarga = isNull(filter.range_harga) ? null : filter.range_harga;

  const total = Object.values(global.filterCategory).filter((value) => value !== null && value !== undefined).length;
  totalFilter.innerHTML = total;
  totalFilter.classList.remove("d-none");
};

module.exports = { onSubmitFilter };
