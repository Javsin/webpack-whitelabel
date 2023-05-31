const { removeTransformInput } = require("../../../globalfunction/remove_tranform_input_floating");

window.onRemoveRange = (element, event) => {
  const value = event.target.value;
  const trimVal = value.trim();
  if (trimVal === "") {
    element.value = "";
    removeTransformInput(element);
  }
};

module.exports = { onRemoveRange };
