const global = require("../../../layout/template6/global");
// const { formatRupiah } = require("../../../globalfunction/formatRupiah");

window.onClickDetail = (value) => {
  global.selectedData.detail.find((data) => {
    if (data.kode === value) {
      const { produk, harga, exp, ketentuan, mydetail } = data;
      const detail = mydetail.map((item) => {
        return `
            <div class="row mb-2">
              <div class="col-12 lh-1">
                <p class="font-large">${item.object} ${item.value === "-" ? "" : item.value}</p>
                ${item.detail === "-" ? "" : `<p class="font-medium">${item.detail}</p>`}
              </div>
            </div>
            
            `;
      });

      const content = `
          <div class="col-12">
            <p class="font-large">${produk}</p>
          </div>
          <div class="col-12">
            <hr>
          </div>
          <div class="col-12">
            ${detail.join("")}
          </div>
          <div class="col-12">
            <hr>
          </div>
          <div class="col-12">
            <p class="font-large"><strong>Syarat dan Ketentuan: </strong></p>
          </div>
          <div class="col-12">
            ${ketentuan}
          </div>
          <div class="col-12">
            <hr>
          </div>
          <div class="col-12">
            <p>${formatRupiah(harga.toString(), "Rp. ")}</p>
            <p class="text-danger">${exp.replace(/\+/g, "")}</p>
          `;

      global.contentOffcanvasDetail.innerHTML = content;
    }
  });

  global.offcanvasDetail.show();
};

module.exports = {
  onClickDetail,
};
