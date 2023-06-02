const html = () => {
  return `<!-- Loading -->
        <div class="loader d-none" id="loading">
          <div class="loader-inner">
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
            <div class="loader-line-wrap">
              <div class="loader-line"></div>
            </div>
          </div>
        </div>
    
        <!-- Offcanvas Filter -->
        <div class="offcanvas offcanvas-bottom border-radius-top-20" data-bs-scroll="false" tabindex="-1" id="offcanvas-filter" aria-labelledby="offcanvasWithBothOptionsLabel" style="height: 87vh">
          <div class="offcanvas-header px-3 pb-0">
            <p class="font-large-2 text-dark fw-bold">Filter</p>
            <button type="button" class="btn-close text-reset" aria-label="Close" onclick="onCloseFilter()"></button>
          </div>
          <div class="offcanvas-body pt-2">
            <form class="row g-2" id="content-offcanvas-filter" onsubmit="onSubmitFilter(this, event)">
              <!-- From JS -->
            </form>
            <div class="footer d-flex flex-row-reverse bg-transparent w-100 position-fixed bottom-0 end-0">
              <div class="px-3 py-2 text-end">
                <!-- <button id="btnClose" class="btn border-radius-10 background-dark-blue text-white py-1 px-4-5" data-bs-dismiss="offcanvas">Mengerti</button> -->
              </div>
            </div>
          </div>
        </div>
    
        <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasketerangan" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header">
            <p class="font-large-1 text-dark fw-bold title-multitrx"></p>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body pt-0">
            <p class="font-large text-secondary isi-multitrx"></p>
          </div>
        </div>
    
        <!-- Offcanvas Detail -->
        <div class="offcanvas offcanvas-bottom border-radius-top-20" data-bs-scroll="false" tabindex="-1" id="offcanvas-detail" aria-labelledby="offcanvasWithBothOptionsLabel" style="height: 75%">
          <div class="offcanvas-header px-3 pb-0">
            <p class="font-large-1 text-dark fw-bold">Detail Produk</p>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body pt-2 mb-5">
            <div class="produk">
              <div class="row gx-2" id="content-offcanvas-detail">
                <!-- From JS -->
              </div>
              <div class="footer d-flex flex-row-reverse bg-transparent w-100 position-fixed bottom-0 end-0">
                <div class="px-3 py-2 text-end">
                  <button id="btnClose" class="btn border-radius-10 background-dark-blue text-white py-1 px-4-5" onclick="onClickBayar(true)">Lanjut</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Offcanvas Rincian -->
        <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasRincianPembelian" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header pb-1">
            <p class="font-large-1 text-dark fw-bold" id="header_pembelian">Rincian Pembelian</p>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body background-default p-0">
            <div class="row produk px-3 bg-white">
              <div class="col-12" id="outter-check-out"></div>
            </div>
            <div class="row bg-white px-3 pb-2 mb-2" id="outter-buy"></div>
          </div>
          <div class="footer bottom-0 end-0">
            <div class="row bg-white footer-pin p-3">
              <div class="col-12">
                <p class="font-large text-secondary">PIN Transaksi</p>
              </div>
              <div class="col-12 mb-3">
                  <div class="input-group">
                    <input type="password" onkeypress="return isNumber(event,this);" maxlength="6" class="form-control border-end-0 border-start-0 border-top-0 border-radius-0 bg-white shadow-none font-large-1 text-secondary" id="pin" aria-label="Nominal" inputmode="numeric">
                    <span id="nominalContact" class="input-group-text bg-transparent border-0 py-1 ps-2 pe-0 text-start ms-4">
                      <div class="align-self-center">
                        <div class="material-switch pull-right">
                          <input id="switchMaterial" name="switch-material" type="checkbox" onclick="changepin(this)" />
                          <label for="switchMaterial" class="background-dark-blue"></label>
                        </div>
                      </div>
                    </span>
                  </div>
              </div>
              <div class="col-6">
                <p class="font-large text-secondary" id="title-total">Total Bayar</p>
                <p class="font-large-1" id="total_bayar"></p>
              </div>
              <div class="col-6 d-flex align-items-end flex-column">
                <div class="text-end">
                  <button id="set_nominal" onclick="bayar()" class="btn border-radius-10 background-dark-blue text-white py-1 px-4-5">Bayar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <!-- Apps -->
        <div id="app" class="background-dark-blue hide-overflow-x">
          <!-- Nav Top -->
          <div class="container">
            <div class="row gx-2 ps-2" style="height: 60px" id="layout-navigation">
              <!-- From JS -->
            </div>
          </div>
          <!-- Main Content -->
          <section id="main-content" class="background-default vh-100">
            <!-- Card Input -->
            <div id="card" class="pt-3">
              <div id="main-input" class="position-relative autocompete-nomor shadow-sm mx-3 border-radius-10 bg-white position-fixed-top">
                <!-- From JS -->
              </div>
              <!-- onscroll="scroll_produk(this)" -->
              <div class="mt-3 mx-3 pb-10 overflow-auto hide-overflow-x" style="height: 65vh">
                <div id="layout-nominal" class="row gx-2">
                  <!-- From JS -->
                </div>
              </div>
            </div>
          </section>
          <!-- Footer -->
          <footer class="d-none" id="footer">
            <div class="footer bg-white fixed-bottom vw-100 border-radius-top-20 py-3 shadow-lg">
              <div class="row mx-2">
                <div class="col-9" id="layout-promo">
                  <div class="row">
                    <!-- From JS -->
                  </div>
                  <div class="row">
                    <div class="col-10">
                      <p class="text-secondary font-large">Total Bayar</p>
                      <p class="text-dark font-large-1" id="total-bottom">Rp 0</p>
                    </div>
                  </div>
                  <!-- <hr class="mt-1 mb-0" /> -->
                </div>
                <div class="col-3 px-0 d-flex justify-content-around align-self-center" id="layout-icon"></div>
              </div>
              <div class="row mt-3 mx-2">
                <div class="col-12 d-flex align-self-center">
                  <button id="btn-checkout" class="btn border-radius-10 background-dark-blue text-white py-1 w-100" onclick="onClickBayar(false)">Lanjut</button>
                </div>
              </div>
            </div>
          </footer>
        </div>`;
};

module.exports = {
  html,
};
