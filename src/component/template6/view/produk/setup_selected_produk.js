const global = require("../../../../layout/template6/global");
const { formatRupiah } = require("../../../../globalfunction/formatRupiah");
const { checkIsPinned } = require("../../function/pinned");

const setup_selected_produk = (data) => {
  const {
    config: { grid },
    layoutNominal,
  } = global;

  const detailProduk = data;
  const columnWidth = 12 / grid;

  layoutNominal.innerHTML = "";

  let card = "";

  if (detailProduk.length === 0) {
    card = `
    <div class="col-12 text-center">
        <span class="badge bg-danger font-large-1">
          Tidak Ada Data
        </span>
    </div>
    `;
  }

  detailProduk.map((item) => {
    const { catatan, exp, filter_masaaktif, harga, isfavorite, ispinned, kategori, kode, kuota, masa_aktif, produk, satuan_kuota, satuan_masa_aktif, tag_filter, terlaris, tag, terjual_string, gangguan } = item;
    let price_color = "";
    let exp_color = "";
    let produk_color = "";
    let tag_color = "";
    let note_color = "";
    gangguan ? (price_color = "text-muted", exp_color = "text-muted", produk_color = "text-muted", tag_color = "text-muted" , note_color = "text-muted") : (price_color = "text-dark", exp_color = "text-orange", produk_color = "text-dark", tag_color = "text-dark", note_color = "text-dark");
    const iconPin = `
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#fff" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
      <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
    </svg>
    `;
    card += `
      <div class="col-${columnWidth} mb-3 card-produk" onclick="onClickProduk(this, event)" data-long-press-delay="1000">
        <div class="h-100 border border-transparent bg-white border-radius-8 mx-0 box-harga" data-kategori="${kategori[0]}">
            <div class="row gx-0">
              <div class="col-12">
                  <div class="row">
                      <div class="col-8">
                          <span class="background-${tag.includes("Promo") ? "green" : "gray"} tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5">${tag}</span>
                          <span class="background-orange tagging border-radius-bottom-8 font-small px-3 py-1 text-white ms-2-5 ${terjual_string === "" ? "d-none" : ""}">${terjual_string}</span>
                      </div>
                      <div class="col-4 d-flex justify-content-end">
                        <span class="bg-danger gangguan border-radius-bottom-8 font-small px-2 py-1 text-white me-2-5 ${gangguan? ` ` : ` d-none`}" data-gangguan="${gangguan}">Gangguan</span>
                        <span class="background-orange pin border-radius-bottom-8 font-small px-1 py-1 text-white me-2-5 ${ispinned ? "" : "d-none"}">${iconPin}</span>
                      </div>
                  </div>
                </div>
                <div class="col-11 pt-2">
                    <p class="font-large-1 fw-bold ${produk_color} ms-2 produk" data-produk="${produk}">${produk}</p>
                </div>
                <div class="col-1 pt-2 ps-0 pe-2 text-end detail" onclick="onClickDetail('${kode}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25">
                        <g id="Group_4703" data-name="Group 4703" transform="translate(0 25) rotate(-90)">
                        <rect id="Rectangle_492" data-name="Rectangle 492" width="25" height="25" fill="none"/>
                        <g id="Layer_x0020_1" transform="translate(5)">
                            <path id="Path_619" data-name="Path 619" d="M14.944,22.331,12.208,25,0,12.49,12.208,0l2.735,2.669-9.6,9.82Z" fill="#484646" fill-rule="evenodd"/>
                        </g>
                        </g>
                    </svg>
                </div>
                <div class="col-12">
                    <p class="font-large ${produk_color} ms-2 aktif" data-aktif="${filter_masaaktif}">Aktif ${masa_aktif != 0 ? masa_aktif : ""} ${satuan_masa_aktif}</p>
                </div>
                <div class="col-9 mt-2 pb-2 pt-0 pe-0 d-flex flex-row justify-content-start parent-harga">
                    <p class="font-large ${price_color} ms-2 harga fw-normal" data-harga="${harga}">${formatRupiah(harga.toString(), "Rp. ")}</p>
                    <p class="font-large ${note_color} ms-2 fw-normal catatan" data-catatan="${catatan}"><i>${catatan}</i></p>
                </div>
                <div class="col-3 mt-2 pb-2 ps-0 pe-2 pt-0 text-end parent-exp">
                    <p class="${exp_color} font-large exp" data-exp="${exp}">${exp.replace("+", "").replace("exp", "XP")}</p>
                    <p class="text-orange font-large kode d-none" data-kode="${kode}">${kode}</p>
                </div>
                <div class="col-12 pb-2 ps-2 pt-0 parent-terlaris d-none" data-terlaris="${terlaris}">
                  <span class="badge background-green border-radius-8 font-small px-2 py-1 fw-normal" >Recommended</span>
                  <span class="badge background-green border-radius-8 font-small px-2 py-1 fw-normal" >Terlaris</span>
                </div>
            </div>
        </div>
      </div>
    `;
  });
  layoutNominal.innerHTML = card;
  checkIsPinned(global.filterCategory.operator);
};

module.exports = {
  setup_selected_produk,
};
