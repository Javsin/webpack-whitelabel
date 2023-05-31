const global = require("../../../layout/template6/global");
const { onTriggerAutoComplete } = require("./on_trigger_autocomplete");

window.kontak = () => {
  set_kontak("081234567890");
  // try {
  //     let set = Android.get_kontak();
  //   } catch (error) {}
};

window.set_kontak = (kontak) => {
  global.element_kontak[0].value = kontak;
  onTriggerAutoComplete();
};

module.exports = {
  kontak,
  set_kontak,
};
