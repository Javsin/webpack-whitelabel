const global  = require('../../../layout/template4/global.js')
window.onChangeTujuan = () => {
    const inputNomor = document.querySelector("body").querySelector("#input-nomor");
    if (inputNomor.value.length === 0) {
      document.querySelector(".hlr-notfound").classList.remove("d-none");
      document.querySelector(".hlr-notfound").innerHTML = "Tujuan tidak boleh kosong";
    } else {
      document.querySelector(".hlr-notfound").classList.add("d-none");
    }
    global.storedData.tujuan = inputNomor.value;
};

module.exports = {onChangeTujuan};
  