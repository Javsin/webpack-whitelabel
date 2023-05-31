const global = require("../../../layout/template6/global.js");

const setup_footer = () => {
  const {
    config: { settingProses },
    layoutIcon,
  } = global;
  const { isVoucher, isTerjadwal, isFavorit } = settingProses;

  const svgFavorite = `
  <svg id="Layer_x0020_1" onclick="favorite()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 38.232 38.232">
    <defs>
      <clipPath id="clip-path">
        <path id="Path_80" data-name="Path 80" d="M0,0H38.232V38.232H0Z" fill="#f37021" clip-rule="evenodd"/>
      </clipPath>
    </defs>
    <g id="Group_62" data-name="Group 62" clip-path="url(#clip-path)">
      <g id="Group_61" data-name="Group 61" transform="translate(0.439 0.439)">
        <path id="Path_79" data-name="Path 79" d="M18.725.047A18.678,18.678,0,1,1,5.518,5.518,18.62,18.62,0,0,1,18.725.047Zm10.644,16c-.311-3.432-2.74-5.921-5.78-5.921a5.749,5.749,0,0,0-4.922,2.836,5.536,5.536,0,0,0-4.8-2.836c-3.041,0-5.47,2.489-5.781,5.921a3.309,3.309,0,0,0-.036.486v.122A7.568,7.568,0,0,0,8.261,18.3a9.636,9.636,0,0,0,2.959,4.934l7.441,6.754,7.568-6.752A9.655,9.655,0,0,0,29.188,18.3a6.124,6.124,0,0,0,.18-2.251Z" transform="translate(-0.047 -0.047)" fill="#f37021" fill-rule="evenodd"/>
      </g>
    </g>
    <path id="Path_81" data-name="Path 81" d="M0,0H38.232V38.232H0Z" fill="none" fill-rule="evenodd"/>
  </svg>
  `;
  const svgTerjadwal = `
  <svg onclick="terjadwal()" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38.232 38.232">
    <g id="Group_4593" data-name="Group 4593" transform="translate(10858.5 4557.5)">
      <path id="Path_83" data-name="Path 83" d="M0,0H38.232V38.232H0Z" transform="translate(-10858.5 -4557.5)" fill="none" fill-rule="evenodd"/>
      <g id="Group_4591" data-name="Group 4591" transform="translate(-11536.134 -5649.134)">
        <circle id="Ellipse_209" data-name="Ellipse 209" cx="18.75" cy="18.75" r="18.75" transform="translate(678 1092)" fill="#f37021"/>
        <path id="Union_64" data-name="Union 64" d="M11586.744,5670.584a4.757,4.757,0,0,1-4.744-4.741V5653.67l0-1.41a4.27,4.27,0,0,1,4.258-4.261h13.845a4.275,4.275,0,0,1,4.261,4.261v13.583a4.752,4.752,0,0,1-4.741,4.741Zm-1.876-16.318a2.648,2.648,0,0,0-.78,1.875v9.637a2.664,2.664,0,0,0,2.656,2.656h12.881a2.664,2.664,0,0,0,2.653-2.656v-9.637a2.664,2.664,0,0,0-2.653-2.656h-.05v-.414a1.491,1.491,0,1,0-2.981,0v.414h-1.92v-.414a1.491,1.491,0,1,0-2.982,0v.414h-1.916v-.414a1.493,1.493,0,1,0-2.985,0v.414h-.046A2.648,2.648,0,0,0,11584.868,5654.267Zm6.532,11.317a.044.044,0,0,1-.043-.043v-3.565a.044.044,0,0,1,.043-.043h3.564a.045.045,0,0,1,.044.043v3.565a.045.045,0,0,1-.044.043Zm-5.649,0a.043.043,0,0,1-.044-.043v-3.565a.043.043,0,0,1,.044-.043h3.564a.042.042,0,0,1,.041.043v3.565a.042.042,0,0,1-.041.043Zm11.3-5.455a.043.043,0,0,1-.041-.044v-3.564a.043.043,0,0,1,.041-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.65,0a.044.044,0,0,1-.043-.044v-3.564a.044.044,0,0,1,.043-.044h3.564a.045.045,0,0,1,.044.044v3.564a.045.045,0,0,1-.044.044Zm-5.649,0a.043.043,0,0,1-.044-.044v-3.564a.043.043,0,0,1,.044-.044h3.564a.043.043,0,0,1,.041.044v3.564a.043.043,0,0,1-.041.044Z" transform="translate(-10896 -4548)" fill="#fff"/>
      </g>
    </g>
  </svg>
  `;
  layoutIcon.innerHTML = svgFavorite + svgTerjadwal;

  if (!isFavorit && !isTerjadwal) {
    layoutIcon.classList.add("d-none");
    layoutPromo.classList.remove("col-9");
    layoutPromo.classList.add("col-12");
  }
  isVoucher === false && layoutPromo.classList.add("d-none");
};

module.exports = { setup_footer };
