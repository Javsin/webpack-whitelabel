const {offcanvasDetail,storedData} = require("../../../layout/template6/global");
const {view_rincian_pembayaran} = require("../view/view_rincian_bayar.js");
window.onClickBayar = (fromModal) => {
  const value = document.querySelector("#input-nomor").value;
  const errorMessage = document.querySelector(".hlr-notfound");

  const regex = /^[0-9]*$/;
  const trimValue = value.trim();

  if (trimValue.length === 0) {
    if (fromModal) offcanvasDetail.hide();
    errorMessage.classList.remove("d-none");
    errorMessage.innerHTML = `Yah, nomor HP kamu belum diisi 😥.
        Silahkan isi nomor HP kamu atau pilih operator pada menu filter.`;
    return;
  } else if (!regex.test(trimValue)) {
    errorMessage.classList.remove("d-none");
    errorMessage.innerHTML = "Nomor HP tidak valid";
    return;
  }

  errorMessage.classList.add("d-none");
  storedData.tujuan = value;

    try {
      const val_pembelian = Android.sendNudes(JSON.stringify(storedData));
      if (fromModal) offcanvasDetail.hide();
      view_rincian_pembayaran(JSON.parse(val_pembelian));
    } catch (error) {
      console.log(error)
    }
};

module.exports = { onClickBayar };
