const setup_tab = (data) => {
  const layoutTab = document.querySelector("#layout-tab");
  const layoutTabChildren = layoutTab.children[0];

  layoutTabChildren.innerHTML = "";
  layoutTab.classList.remove("d-none");

  data.map((item, index) => {
    const { nama, value } = item;
    const nav = `
      <li class="nav-item ">
        <a class="nav-link text-dark px-3 ${index === 0 ? "active" : ""}" aria-current="page" onclick="setup_active_tab(this, '${value}')">${nama}</a>
      </li>
    `;
    layoutTabChildren.innerHTML += nav;
  });
};

module.exports = {
  setup_tab,
};
