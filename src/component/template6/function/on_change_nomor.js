window.onChangeNomor = (event) => {
  const errorMessage = document.querySelector(".hlr-notfound");
  const labelNomor = document.querySelector("#label-nomor-operator");
  const value = event.target.value;
  const regex = /^[0-9]*$/;
  // trim value
  const trimValue = value.trim();
  if (trimValue.length === 0) {
    errorMessage.innerHTML = `Yah, nomor HP kamu belum diisi 😥. 
      Silahkan isi nomor HP kamu atau pilih operator pada menu filter.`;
    errorMessage.classList.remove("d-none");
    return;
  } else if (!regex.test(trimValue)) {
    errorMessage.innerHTML = "Nomor HP tidak valid";
    errorMessage.classList.remove("d-none");
    labelNomor.innerHTML = "";
    return;
  } else {
    errorMessage.classList.add("d-none");
  }
};

module.exports = {
  onChangeNomor,
};
