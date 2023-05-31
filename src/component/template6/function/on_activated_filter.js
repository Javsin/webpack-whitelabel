const global = require("../../../layout/template6/global");
const { removeTransformInput } = require("../../../globalfunction/remove_tranform_input_floating");
// const { transformInput } = require("../../../globalfunction/transform_input_floating");
// const { formatRupiah } = require("../../../globalfunction/formatRupiah");

window.onActivatedFilter = (element, classElement, inputElm) => {
  // parent element
  const parent = element.parentElement.parentElement;
  let elements = "";
  if (classElement === "urutan") {
    elements = document.querySelectorAll(`.${classElement}`);
  } else {
    elements = parent.querySelectorAll(`.${classElement}`);
  }

  elements.forEach((btn) => {
    if (btn !== element) {
      btn.classList.remove("active-outline");
    } else {
      // DEACTIVED
      if (element.classList.contains("active-outline")) {
        element.classList.remove("active-outline");
        if (classElement === "operator") {
          global.filterCategory.operator = null;
        }
        if (element.classList.contains("range_kuota") || element.classList.contains("range_harga")) {
          inputElm.map((input) => {
            removeTransformInput(document.querySelector(`#${input}`));
            document.querySelector(`#${input}`).value = "";
          });
        }
      } else {
        // ACTIVED
        element.classList.add("active-outline");
        if (!inputElm) {
          return;
        } else {
          const value = element.dataset.value;
          // remove - from value and make it to array and remove space
          const valueArray = value.split("-").map((item) => {
            return item.replace(/\s/g, "");
          });
          // loop value array and parse to inputElm value
          inputElm.map((input) => {
            transformInput(document.querySelector(`#${input}`));
            if (input === "min-kuota") {
              document.querySelector(`#${input}`).value = +valueArray[0];
            } else if (input === "max-kuota") {
              document.querySelector(`#${input}`).value = +valueArray[1];
            }

            if (input === "min-harga") {
              document.querySelector(`#${input}`).value = formatRupiah(valueArray[0]);
            } else if (input === "max-harga") {
              document.querySelector(`#${input}`).value = formatRupiah(valueArray[1]);
            }
          });
        }
      }
    }
  });
};

module.exports = { onActivatedFilter };
