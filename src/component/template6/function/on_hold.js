window.onHold = (kode) => {
  try {
    Android.is_vibrator(kode);
  } catch (error) {}
};

module.exports = {
  onHold,
};
