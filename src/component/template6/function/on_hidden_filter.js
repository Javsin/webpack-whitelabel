const global = require("../../../layout/template6/global");

const onHiddenFilter = () => {
  global.filterComponent.addEventListener("hidden.bs.offcanvas", function () {
    const alert = this.querySelectorAll(".alert");
    alert.forEach((element) => {
      element.remove();
    });
  });
};

module.exports = {
  onHiddenFilter,
};
