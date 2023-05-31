const global = require("../../../layout/template6/global");
const { scrollTo } = require("../../../globalfunction/scroll_to");

window.onCloseFilter = () => {
  if (global.filterCategory.operator === undefined || global.filterCategory.operator === null) {
    if (global.filterComponent.querySelector(".alert") !== null) {
      global.filterComponent.querySelector(".alert").remove();
    }
    const alert = ` 
        <div class="alert alert-danger alert-dismissible fade show mb-2 border-radius-8" role="alert">
          <strong>Error!</strong> Yaah, operator harus diisi, kemudian klik tombol <strong>Terapkan</strong> kak! 😉
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    document.querySelector("#content-offcanvas-filter").insertAdjacentHTML("beforebegin", alert);
    scrollTo(global.filterComponent.querySelector(".offcanvas-body"), 0, 100);
    return;
  } else {
    global.offcanvasFilter.hide();
  }
};
