const global = require("../../../layout/template6/global.js");

const setup_main_content = () => {
  const { config, mainInput, title_total } = global;
  mainInput.innerHTML = ``;

  const { settingTujuan, keterangan } = config;
  const { title, isScan, isKontak, hint, tipe, isHlr } = settingTujuan;

  let class_input = "";
  let show_scan = "";
  let show_kontak = "";

  title_total.innerHTML = config.settingProses.title;

  if (isScan) {
    if (isKontak) {
      class_input = "border-end-0";
      show_kontak = "bg-transparent";
    } else {
      show_kontak = "d-none";
    }
  } else {
    if (isKontak) {
      class_input = "border-end-0";
      show_scan = "d-none";
      show_kontak = "border-radius-right-8 bg";
    } else {
      class_input = "border-radius-right-8";
      show_scan = "d-none";
      show_kontak = "d-none";
    }
  }

  const input = `
    <div class="row px-2 py-2">
    <div class="col-12 mb-2 px-1 d-none" id="layout-tab">
      <ul class="nav justify-content-between" >
      </ul>
    </div>
    <div class="col-12 py-1 d-none" id="layout-filter-paket">
      <div class="d-flex overflow-scroll w-100">
      </div>
    </div>
    <div class="col-12">
      <p class="text-secondary font-large" id="head-title">${character_find(keterangan)}</p>
    </div>
    <div class="col-12 mt-2 dynamic-form" id="dynamic-form">
      <div class="col-12 dynamic-form">
        <div class="multi">
          <div class="row">
            <div class="col-6">
              <p id="label-nomor" class="text-secondary font-large">${title}</p>
            </div>
            <div class="col-6 text-end">
              <p id="label-nomor-operator" class="text-secondary font-large operator-label"></p>
            </div>
            <div class="col-12 mb-1">
              <div class="input-group mb-1">
                <input
                  id="input-nomor"
                  type="text"
                  class="form-control ${class_input} shadow-none border-radius-left-8 font-large-1 text-secondary nomor"
                  placeholder="${hint}"
                  aria-label="Nomor User"
                  inputmode="${tipe}"
                  aria-describedby="inptNomor"
                  autocomplete="off"
                  onkeyup="${isHlr ? "setup_auto_complete(this)" : ""}"
                  onpaste="${isHlr ? "setup_auto_complete(this)" : ""}"
                  maxlength="15"
                />
                <span id="labelContact" class="input-group-text border-start-0 py-1 px-2 ${show_kontak}" onclick="kontak(this)" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 31.889 31.889">
                        <g id="Group_4948" data-name="Group 4948" transform="translate(0 -18.349)">
                        <path id="Path_152" data-name="Path 152" d="M30.8,0H0V31.889H31.889V0H30.8ZM15.473,19.09h-.942a1.163,1.163,0,0,1-1.162-1.162.965.965,0,0,1,.074-.366v0a.922.922,0,0,1,.212-.306,5.39,5.39,0,0,0,.7-.858,6.836,6.836,0,0,0,.58-1.079L15.072,15l.274.2.051.033.015,0c.147,0,.345-.22.517-.514h0a2.556,2.556,0,0,0,.361-1.182,3.388,3.388,0,0,0-.088-.94h0c-.047-.145-.123-.234-.246-.234l-.047,0-.091.019-.323.07,0-.331a6.506,6.506,0,0,0-.681-3.113A3.112,3.112,0,0,0,11.874,7.53,3.109,3.109,0,0,0,8.89,9.009a6.684,6.684,0,0,0-.628,3.108l-.005.311-.306-.047-.058-.009-.053-.006c-.118,0-.192.094-.236.234a3.445,3.445,0,0,0-.088.941,2.573,2.573,0,0,0,.361,1.184c.172.294.368.512.517.512h.018l.006,0,.009,0,.27-.18.131.3A7.047,7.047,0,0,0,9.4,16.409a5.273,5.273,0,0,0,.689.843.918.918,0,0,1,.212.309h0a.982.982,0,0,1,.076.367A1.161,1.161,0,0,1,9.225,19.09H8.282a3.382,3.382,0,0,0-3.387,3.379v1.014a.88.88,0,0,0,.884.879H17.968a.885.885,0,0,0,.625-.258h0a.873.873,0,0,0,.259-.621V22.469a3.364,3.364,0,0,0-.988-2.389h0a3.374,3.374,0,0,0-2.391-.99ZM26.411,9.064h-9.82a6.9,6.9,0,0,1,.233.758,8.523,8.523,0,0,1,.212,1.271,1.48,1.48,0,0,1,.242.238h0a2.053,2.053,0,0,1,.175.253h8.957a.583.583,0,0,0,.409-.172h0a.581.581,0,0,0,.171-.41V9.646a.59.59,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586h-8.7a4.108,4.108,0,0,1-.663,1.281,2.43,2.43,0,0,1-1.011.79v.451H26.411a.583.583,0,0,0,.581-.583V15.231a.591.591,0,0,0-.169-.411h0a.592.592,0,0,0-.411-.17Zm0,5.586H19.924a4.846,4.846,0,0,1,.336.854,4.931,4.931,0,0,1,.2,1.381v.285h5.954a.583.583,0,0,0,.581-.581V20.816a.579.579,0,0,0-.171-.409h0a.579.579,0,0,0-.409-.171ZM2.448,2.176H29.713V29.713H2.176V2.176Z" transform="translate(0 18.349)" fill="#9e9c9d"/>
                        </g>
                    </svg>
                </span>
                <span class="input-group-text border-radius-right-8 ${show_scan}" id="labelScan"  onclick="scan(this)">
                    <svg id="Layer_x0020_1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33.467 33.467">
                        <path id="Path_879" data-name="Path 879" d="M5.866,14.592H27.6v4.282H5.866V14.592Zm6.788,18.874H7.014A7.032,7.032,0,0,1,0,26.452V21.424H3.67v5.028A3.36,3.36,0,0,0,7.014,29.8h5.64v3.67Zm8.159-3.67h5.64A3.36,3.36,0,0,0,29.8,26.452V21.424h3.67v5.028a7.031,7.031,0,0,1-7.014,7.014h-5.64V29.8ZM12.654,3.67H7.014A3.36,3.36,0,0,0,3.67,7.014v5.028H0V7.014A7.031,7.031,0,0,1,7.014,0h5.64V3.67ZM20.813,0h5.64a7.031,7.031,0,0,1,7.014,7.014v5.028H29.8V7.014A3.36,3.36,0,0,0,26.452,3.67h-5.64V0Z" transform="translate(0 0)" fill="#545654"/>
                    </svg>
                </span>
              </div>
              <p class="font-normal hlr-notfound text-red mb-2 d-none"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

  mainInput.innerHTML = input;
};

const character_find = (str) => {
  if (str.length > 150) {
    substr = str.substring(0, 150);
    if (substr.includes(" ")) {
      return (substr = substr.substring(0, substr.lastIndexOf(" ")) + ` ...<span class='text-light-blue' onclick='title_keterangan("${str}")'> Selengkapnya.</span>`);
    }
  } else {
    return str;
  }
};

module.exports = {
  setup_main_content,
};
