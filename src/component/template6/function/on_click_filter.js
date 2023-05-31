const global = require("../../../layout/template6/global");
const { removeSpaceAndAddDash } = require("../../../globalfunction/remove_space_add_dash");
// const { transformInput } = require("../../../globalfunction/transform_input_floating");

window.onClickFilter = () => {
  const { for_filteroperator } = global.selectedData;
  const { selection, range_harga, sortbyabjad, urutan } = global.rawData.filter;

  let content = "";
  selection.map((item) => {
    const { judul, isHidden, max_selection, detail } = item;
    content += `
    <div class="mb-2 ${isHidden ? "d-none" : ""}" id="${removeSpaceAndAddDash(judul).toLowerCase()}">
      <div class="col-12 mb-2">
        <p>${judul}</p>
      </div>
      <div class="col-12 py-0 px-0" >
        <div class="row gx-2">
          ${detail
            .map((data) => {
              const { nama, value } = data;
              let classNameKuota = "";
              let classNameMasaAktif = "";
              if (global.filterCategory.masaAktif === value) {
                classNameMasaAktif = "active-outline";
              }
              return `
              <div class="col-4"><span class="badge w-100 border-radius-8 font-large btn-outline-dark-blue p-2 fw-normal filter mb-2 ${removeSpaceAndAddDash(judul).toLowerCase()} ${
                for_filteroperator === value ? "active-outline" : ""
              } ${classNameKuota} ${classNameMasaAktif}" data-value="${value}" onclick="onActivatedFilter(this, '${removeSpaceAndAddDash(judul).toLowerCase()}')">${nama}</span></div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
    `;
  });

  content += `
  <div class="mb-2" id="dummy-floating">
    <div class="col-12 mb-2">
      <p>Kuota</p>
    </div>
    <div class="col-12 py-0 px-1">
      <div class="row gx-2">
        <div class="col-6">
          <div class="form-group floating mb-2">
            <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control floating border-radius-8" id="min-kuota" autocomplete="off" onblur="onRemoveRange(this, event)" onfocus="transformInput(this)"
            value="${global.tempInputRange.minKuota !== null ? global.tempInputRange.minKuota : ""}"
            >
            <label for="min-kuota" class="text-secondary">Minimal</label>
            <span class="first">GB</span>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group floating">
            <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control floating border-radius-8" id="max-kuota" autocomplete="off" onblur="onRemoveRange(this, event)" onfocus="transformInput(this)"
            value="${global.tempInputRange.maxKuota !== null ? global.tempInputRange.maxKuota : ""}"
            >
            <label for="max-kuota" class="text-secondary">Maksimal</label>
            <span class="last">GB</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 pt-3 mt-1 px-0">
      <div class="row gx-2">
        <div class="col-4">
        <span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter range_kuota ${
          global.filterCategory.rangeKuota !== null ? (global.filterCategory.rangeKuota[0] === 0 && global.filterCategory.rangeKuota[1] === 5 ? "active-outline" : "") : ""
        }" data-value="0 - 5" onclick="onActivatedFilter(this, 'range_kuota', ['min-kuota', 'max-kuota'])">0 - 5 GB</span></div>
        <div class="col-4"><span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter range_kuota ${
          global.filterCategory.rangeKuota !== null ? (global.filterCategory.rangeKuota[0] === 6 && global.filterCategory.rangeKuota[1] === 15 ? "active-outline" : "") : ""
        }" data-value="6 - 15" onclick="onActivatedFilter(this, 'range_kuota', ['min-kuota', 'max-kuota'])">6 - 15 GB</span></div>
        <div class="col-4"><span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter range_kuota ${
          global.filterCategory.rangeKuota !== null ? (global.filterCategory.rangeKuota[0] === 16 && global.filterCategory.rangeKuota[1] === 30 ? "active-outline" : "") : ""
        }" data-value="16 - 30" onclick="onActivatedFilter(this, 'range_kuota', ['min-kuota', 'max-kuota'])">16 - 30 GB</span></div>
      </div>
    </div>
  </div>
  `;

  content += `
  <div class="mb-2" id="dummy-floating-harga">
    <div class="col-12 mb-2">
      <p>Harga</p>
    </div>
    <div class="col-12 py-0 px-1">
      <div class="row gx-2">
        <div class="col-6">
          <div class="form-group floating mb-2">
            <input type="text" inputmode="numeric" class="form-control floating border-radius-8" id="min-harga" autocomplete="off" onblur="onRemoveRange(this, event)" onfocus="transformInput(this)" onkeyup="onChangeHarga(this, event)"
            value="${global.tempInputRange.minHarga !== null ? global.tempInputRange.minHarga : ""}"
            >
            <label for="min-harga" class="text-secondary">Minimal</label>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group floating">
            <input type="text" inputmode="numeric" class="form-control floating border-radius-8" id="max-harga" autocomplete="off" onblur="onRemoveRange(this, event)" onfocus="transformInput(this)" onkeyup="onChangeHarga(this, event)"
            value="${global.tempInputRange.maxHarga !== null ? global.tempInputRange.maxHarga : ""}"
            >
            <label for="max-harga" class="text-secondary">Maksimal</label>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 pt-3 mt-1 px-0">
      <div class="row gx-2">
          <div class="col-4">
            <span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter range_harga ${
              global.filterCategory.rangeHarga !== null ? (global.filterCategory.rangeHarga[0] === 1000 && global.filterCategory.rangeHarga[1] === 25000 ? "active-outline" : "") : ""
            }" data-value="1000 - 25000" onclick="onActivatedFilter(this, 'range_harga', ['min-harga', 'max-harga'])">Rp1 rb - Rp25 rb</span>
          </div>
          <div class="col-4">
            <span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter range_harga ${
              global.filterCategory.rangeHarga !== null ? (global.filterCategory.rangeHarga[0] === 26000 && global.filterCategory.rangeHarga[1] === 50000 ? "active-outline" : "") : ""
            }" data-value="26000 - 50000" onclick="onActivatedFilter(this, 'range_harga', ['min-harga', 'max-harga'])">Rp26 rb - Rp50 rb</span>
          </div>
          <div class="col-4">
            <span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter range_harga ${
              global.filterCategory.rangeHarga !== null ? (global.filterCategory.rangeHarga[0] === 51000 && global.filterCategory.rangeHarga[1] === 200000 ? "active-outline" : "") : ""
            }" data-value="51000 - 200000" onclick="onActivatedFilter(this, 'range_harga', ['min-harga', 'max-harga'])">Rp51 rb - Rp200 rb</span>
          </div>
      </div>
    </div>
  </div>
  `;

  content += `
    <div class="mb-3 ${urutan.isHidden ? "d-none" : ""}" id="${removeSpaceAndAddDash(urutan.judul).toLowerCase()}">
      <div class="col-12 mb-2">
        <p>Urutan</p>
      </div>
      <div class="col-12 py-0 px-0 align-items-center mb-3">
         <div class="row gx-2">
          ${urutan.detail
            .map((data) => {
              return `
              <div class="col-4">
                <span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter mb-2 ${removeSpaceAndAddDash(urutan.judul).toLowerCase()} ${
                global.filterCategory.sort === data ? "active-outline" : ""
              }" data-value="${data}" onclick="onActivatedFilter(this, '${removeSpaceAndAddDash(urutan.judul).toLowerCase()}')">${data}</span></div>
              `;
            })
            .join("")}
          </div>
      </div>
      <div class="col-12 py-0 px-0 mt-2">
        <div class="row gx-2">
          ${sortbyabjad.detail
            .map((data) => {
              return `
              <div class="col-5">
              <span class="badge w-100 border-radius-8 font-medium btn-outline-dark-blue p-2 fw-normal filter mb-2 urutan ${
                global.filterCategory.sort === data ? "active-outline" : ""
              }" data-value="${data}" onclick="onActivatedFilter(this, 'urutan')">${data}</span></div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;

  content += `
    <div id="actions">
      <div class="col-12 py-0 px-0">
        <div class="row gx-2">   
          <div class="col-6">
            <button type="button" class="btn btn-sm w-100 font-large text-white background-dark-blue border-radius-8 p-2 fw-normal" id="btn-reset" onclick="onResetForm()">Reset</button>
          </div>
          <div class="col-6">
            <button type="submit" class="btn btn-sm w-100 font-large text-white background-dark-blue border-radius-8 p-2 fw-normal" id="btn-filter">Terapkan</button>
          </div>
        </div>
      </div>
    </div>
  `;

  global.contentOffcanvasFilter.innerHTML = content;

  if (global.tempInputRange.minHarga !== null && global.tempInputRange.maxHarga !== null) {
    const inputMinHarga = document.querySelector("#min-harga");
    const inputMaxHarga = document.querySelector("#max-harga");
    transformInput(inputMinHarga);
    transformInput(inputMaxHarga);
  }

  if (global.tempInputRange.minKuota !== null && global.tempInputRange.maxKuota !== null) {
    const inputMinKuota = document.querySelector("#min-kuota");
    const inputMaxKuota = document.querySelector("#max-kuota");
    transformInput(inputMinKuota);
    transformInput(inputMaxKuota);
  }

  global.offcanvasFilter.show();
};
