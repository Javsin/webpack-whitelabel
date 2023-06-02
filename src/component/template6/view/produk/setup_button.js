const { toCapitalizeFirstLetter } = require("../../../../globalfunction/capitalize_letter");

const setup_button = (data) => {
  let button = ``;

  const layoutFilterPaket = document.querySelector("#layout-filter-paket");
  const layoutFilterPaketChildren = layoutFilterPaket.children[0];

  layoutFilterPaketChildren.innerHTML = "";
  layoutFilterPaket.classList.remove("d-none");

  data.map((item) => {
    button += `
        <span class="badge border-radius-5 font-medium text-dark border-gray btn-filter-kategori p-2 fw-normal nav-button me-2" onclick="setup_active_button(this, '${item.title_tag}')">${toCapitalizeFirstLetter(item.title_tag)}</span>
    `;
  });

  layoutFilterPaketChildren.innerHTML = button;
};

module.exports = {
  setup_button,
};
