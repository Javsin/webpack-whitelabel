const global = require("../../../layout/template6/global.js");

const setup_default_navigation = () => {
  const { layoutNavigation } = global;
  layoutNavigation.innerHTML = "";

  const navigation = `
  <div class="col-1 d-flex align-items-center">
    <a href="#" onclick="homeAndroid()" class="text-decoration-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 30.63">
        <g id="Group_1003" data-name="Group 1003" transform="translate(-77 -89)">
          <g id="Layer_x0020_1" transform="translate(77 89)">
            <path id="Path_24" data-name="Path 24" d="M18.013,27.055l-7.417-7.6-.877-.9-.877-.9H36V12.97H8.843l.877-.9.877-.9,7.415-7.6.3-.3-.3-.3L15.261.3l-.3-.3-.3.3L.313,15.006,0,15.327l.132.115.014.013.031.029.017.017.12.123,14.348,14.7.3.3.3-.3,2.744-2.678.3-.3Z" fill="#fff" fill-rule="evenodd"/>
          </g>
        </g>
      </svg>
    </a>
  </div>
  <div class="col-11 d-flex align-items-center">
    <p class="w-100 text-white fs-5">Paket Data</p>
  </div>
  `;

  layoutNavigation.innerHTML = navigation;
};

module.exports = { setup_default_navigation };
