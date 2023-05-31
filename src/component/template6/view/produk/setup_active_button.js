const { setup_active_tab } = require("./setup_active_tab");
const { onFilterTagging } = require("../../function/on_filter_tagging");

window.setup_active_button = (element, value) => {
  const allBtnOutline = document.querySelectorAll(".btn-outline-dark-blue");
  const activeTab = document.querySelector(".nav-link.active");

  // addClassName(element, "active-outline");
  allBtnOutline.forEach((btn) => {
    if (btn !== element) {
      btn.classList.remove("active-outline");
    } else {
      if (element.classList.contains("active-outline")) {
        element.classList.remove("active-outline");
        setup_active_tab(activeTab, activeTab.innerHTML.toLowerCase());
        return;
      } else {
        element.classList.add("active-outline");
        onFilterTagging(value);
      }
    }
  });
};

module.exports = {
  setup_active_button,
};
