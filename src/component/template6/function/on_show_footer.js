const global = require("../../../layout/template6/global");

const set_heightscreen = () => {
  window.onload = function() {
      global.height_screen = window.innerHeight
  }
}

const resize = () => {
  window.addEventListener("resize", () => {
    if (window.innerHeight >= global.height_screen) {
      if (global.show_bottom_nav == true) {
          global.footer.classList.remove("d-none");
      }
    } else {
      if (global.show_bottom_nav == true) {
          global.footer.classList.add("d-none");
      }
    }
  });
}



module.exports = { resize, set_heightscreen };
