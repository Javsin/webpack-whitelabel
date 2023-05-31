const removeSpaceAndAddDash = (string) => {
  return string.replace(/\s/g, "_");
};

module.exports = { removeSpaceAndAddDash };
