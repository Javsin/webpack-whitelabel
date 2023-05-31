const global = require("../../../layout/template6/global");
window.bayar = () => {
    try {
        const form_pin  = document.getElementById('pin')
        global.panchi.pincok = form_pin.value
        Android.panchi(JSON.stringify(global.panchi));
    } catch (error) {}
};
module.exports = {bayar};
  