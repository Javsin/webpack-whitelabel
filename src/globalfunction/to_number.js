const toNumber = (number) => {
  const removeRupiah = number.replace(/[^0-9]/g, "");
  const final = parseInt(removeRupiah);
  return final;
};

module.exports = { toNumber };
