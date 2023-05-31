window.onChangeHarga = (element, event) => {
  const value = event.target.value;
  const finalResult = formatRupiah(value);
  element.value = finalResult;
};

module.exports = { onChangeHarga };
