const global = require("../../../../layout/template6/global");

const setup_pembayaran = (data_pembayaran) => {
  global.panchi = "";

  let view_rincian_pembelian = "";
  let view_rincian_bayar = "";

  global.panchi = {
    pancigedhe: [],
    pincok: "",
  };

  header_pembelian.textContent = data_pembayaran.header_pembelian;
  data_pembayaran.rincian_pembelian.map((item) => {
    let obj = {
      kode: item.kode_produk,
      tujuan: item.value_tujuan,
    };
    panchi.pancigedhe.push(obj);

    view_rincian_pembelian += `<div class="row check-out mb-1">
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${item.title_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${item.value_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${item.title_nama_produk}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${item.value_nama_produk}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${item.title_harga}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${formatRupiah(item.value_harga, "Rp. ")}</p>
        </div>
        <div class="col-4 mb-1">
          <p class="font-large text-secondary">${item.title_tujuan}</p>
        </div>
        <div class="col-8 mb-1 text-end">
          <p class="font-large text-secondary">${item.value_tujuan}</p>
        </div>
        <div class="col-12 mt-1">
          <p class="font-medium text-secondary"><span class="px-1 font-medium border-radius-5 border-orange text-orange me-1">${item.xp}</span>${item.keterangan}</p>
        </div>
      </div>`;
  });
  outter_check_out.innerHTML = view_rincian_pembelian;
  view_rincian_bayar = `
      <div class="col-12">
        <hr>
      </div>
      <div class="col-12 mb-1">
        <p class="fw-bold font-large-1">${data_pembayaran.header_pembayaran}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${data_pembayaran.detail_pembayaran.title_saldo_awal}</p>
      </div>
      <div class="col-8 text-end mb-1">
        <p id="saldo-awal" class="font-large text-secondary">${formatRupiah(data_pembayaran.detail_pembayaran.value_saldo_awal, "Rp. ")}</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${data_pembayaran.detail_pembayaran.title_harga_produk}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p class="font-large text-dark">(${formatRupiah(data_pembayaran.detail_pembayaran.value_harga_produk, "Rp. ")})</p>
      </div>
      <div class="col-4 mb-1">
        <p class="font-large text-secondary">${data_pembayaran.detail_pembayaran.title_saldo_akhir}</p>
      </div>
      <div class="col-8 mb-1 text-end">
        <p id="saldo-akhir" class="font-large text-dark">${formatRupiah(data_pembayaran.detail_pembayaran.value_saldo_akhir, "Rp. ")}</p>
      </div>
    `;
  outter_buy.innerHTML = view_rincian_bayar;
  total_bayar.textContent = formatRupiah(data_pembayaran.detail_pembayaran.value_harga_produk, "Rp. ");
  offcanvasRincian.show();
};
