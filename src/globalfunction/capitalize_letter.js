const toCapitalizeFirstLetter = (string) => {
  const result = string.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
  return result;
};

module.exports = {
  toCapitalizeFirstLetter,
};
