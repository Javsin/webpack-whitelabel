const global = require("../../../layout/template6/global");
const { setup_main_content } = require("../view/setup_main_content");
const { setup_menu } = require("../view/setup_menu");
const { setup_default_navigation } = require("../view/setup_default_navigation");
// const { resetFilter } = require("./reset_filter");

window.onClickToMenu = () => {
  resetFilter();
  !global.footer.classList.contains("d-none") && (global.footer.classList.add("d-none"), (global.layoutNominal.parentElement.style.height = "65vh"));

  global.mainInput.classList.add("min-margin-top-min-3");
  global.mainInput.classList.remove("min-margin-top-min-4");
  setup_main_content();
  setup_default_navigation();
  setup_menu(global.allData);
  global.show_bottom_nav = false;
};

module.exports = {
  onClickToMenu,
};
