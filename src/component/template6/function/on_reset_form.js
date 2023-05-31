const { removeTransformInput } = require("../../../globalfunction/remove_tranform_input_floating");
const { resetFilter } = require("./reset_filter");

window.onResetForm = () => {
  const form = document.querySelector("#content-offcanvas-filter");
  const elements = form.querySelectorAll(".active-outline");
  const inputMinHarga = document.querySelector("#min-harga");
  const inputMaxHarga = document.querySelector("#max-harga");
  const inputMinKuota = document.querySelector("#min-kuota");
  const inputMaxKuota = document.querySelector("#max-kuota");

  elements.forEach((element) => {
    if (!element.classList.contains("operator")) {
      element.classList.remove("active-outline");
    }
  });

  inputMinHarga.value = "";
  inputMaxHarga.value = "";
  inputMinKuota.value = "";
  inputMaxKuota.value = "";

  removeTransformInput(inputMaxHarga);
  removeTransformInput(inputMinHarga);
  removeTransformInput(inputMaxKuota);
  removeTransformInput(inputMinKuota);

  resetFilter();
};

module.exports = { onResetForm };
