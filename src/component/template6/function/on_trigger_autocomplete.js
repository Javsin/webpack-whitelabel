// const { setup_auto_complete } = require("./autocomplete");

const onTriggerAutoComplete = () => {
  const inputNomor = document.querySelector("#input-nomor");
  if (inputNomor.getAttribute("onkeyup") === "setup_auto_complete(this)") {
    const event = new Event("keyup");
    inputNomor.dispatchEvent(event);
  } else {
    setup_auto_complete(inputNomor);
  }
};

module.exports = { onTriggerAutoComplete };
