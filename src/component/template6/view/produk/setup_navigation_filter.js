const global = require("../../../../layout/template6/global.js");

const setup_navigation_filter = () => {
  const { layoutNavigation, isFilterChange } = global;
  layoutNavigation.innerHTML = "";

  const navigation = `
  <div class="col-1 d-flex align-items-center" onclick="onClickToMenu()">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 30.63">
    <g id="Group_1003" data-name="Group 1003" transform="translate(-77 -89)">
      <g id="Layer_x0020_1" transform="translate(77 89)">
        <path id="Path_24" data-name="Path 24" d="M18.013,27.055l-7.417-7.6-.877-.9-.877-.9H36V12.97H8.843l.877-.9.877-.9,7.415-7.6.3-.3-.3-.3L15.261.3l-.3-.3-.3.3L.313,15.006,0,15.327l.132.115.014.013.031.029.017.017.12.123,14.348,14.7.3.3.3-.3,2.744-2.678.3-.3Z" fill="#f37021" fill-rule="evenodd"/>
      </g>
    </g>
  </svg>
</div>
<div class="col-9 d-flex align-items-center">
  <input type="text" name="search" id="search" placeholder="Kuota Internet" class="w-100 px-2 border-0 border-radius-8" style="height: 65%" autocomplete="off" onkeyup="onSearch(event)" />
</div>
<div class="col-2 d-flex align-items-center" onclick="onClickFilter()" style="padding-left: 0.15rem;">
  <div class="d-flex flex-row position-relative align-items-center">
    <p class="text-white pe-1 fw-bold">Filter</p>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger ${isFilterChange === false && "d-none"}" id="total-filter">
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-sliders fw-bold" viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
      />
    </svg>
  </div>
</div>
    `;

  layoutNavigation.innerHTML = navigation;
};

module.exports = { setup_navigation_filter };
