const { setup_active_tab } = require("./setup_active_tab");
const { onFilterTagging } = require("../../function/on_filter_tagging");

window.setup_active_button = (element, value) => {
  const allBtnOutline = document.querySelectorAll(".btn-filter-kategori");
  const activeTab = document.querySelector(".nav-link.active");

  // addClassName(element, "active-outline");
  allBtnOutline.forEach((btn) => {
    if (btn !== element) {
      btn.classList.remove("active-outline");
      btn.classList.add("border-gray");
    } else {
      if (element.classList.contains("active-outline")) {
        element.classList.remove("active-outline");
        element.classList.add("border-gray");
        setup_active_tab(activeTab, activeTab.innerHTML.toLowerCase());
        return;
      } else {
        element.classList.add("active-outline");
        element.classList.remove("border-gray");
        onFilterTagging(value);
      }
    }
  });
};

module.exports = {
  setup_active_button,
};
