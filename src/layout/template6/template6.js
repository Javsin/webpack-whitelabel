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
                <p class="font-large text-secondary">PIN Transaksi
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22.818 22.818" class="mb-1 ms-1" onclick="informasi_pin()">
                    <g id="Group_3601" data-name="Group 3601" transform="translate(-605 -788)">
                      <g id="Path_1137" data-name="Path 1137" transform="translate(605 788)" fill="#fff">
                        <path d="M 11.40908813476562 21.81817817687988 C 5.669497966766357 21.81817817687988 0.999998152256012 17.14867782592773 0.999998152256012 11.40908813476562 C 0.999998152256012 5.669497966766357 5.669497966766357 0.999998152256012 11.40908813476562 0.999998152256012 C 17.14867782592773 0.999998152256012 21.81817817687988 5.669497966766357 21.81817817687988 11.40908813476562 C 21.81817817687988 17.14867782592773 17.14867782592773 21.81817817687988 11.40908813476562 21.81817817687988 Z" stroke="none"/>
                        <path d="M 11.40908813476562 1.999998092651367 C 6.220897674560547 1.999998092651367 1.999998092651367 6.220897674560547 1.999998092651367 11.40908813476562 C 1.999998092651367 16.5972785949707 6.220897674560547 20.81817817687988 11.40908813476562 20.81817817687988 C 16.5972785949707 20.81817817687988 20.81817817687988 16.5972785949707 20.81817817687988 11.40908813476562 C 20.81817817687988 6.220897674560547 16.5972785949707 1.999998092651367 11.40908813476562 1.999998092651367 M 11.40908813476562 -1.9073486328125e-06 C 17.71014785766602 -1.9073486328125e-06 22.81817817687988 5.10801887512207 22.81817817687988 11.40908813476562 C 22.81817817687988 17.71014785766602 17.71014785766602 22.81817817687988 11.40908813476562 22.81817817687988 C 5.10801887512207 22.81817817687988 -1.9073486328125e-06 17.71014785766602 -1.9073486328125e-06 11.40908813476562 C -1.9073486328125e-06 5.10801887512207 5.10801887512207 -1.9073486328125e-06 11.40908813476562 -1.9073486328125e-06 Z" stroke="none" fill="#61c6db"/>
                      </g>
                      <path id="Path_917" data-name="Path 917" d="M4.462-14.222a1.362,1.362,0,0,1,1.008.415,1.375,1.375,0,0,1,.41,1,1.367,1.367,0,0,1-.415,1,1.367,1.367,0,0,1-1,.415,1.355,1.355,0,0,1-.994-.415,1.367,1.367,0,0,1-.415-1,1.375,1.375,0,0,1,.41-1A1.351,1.351,0,0,1,4.462-14.222Zm.6,4.437L3.083-2.927a3.792,3.792,0,0,0-.164.772.283.283,0,0,0,.087.2.253.253,0,0,0,.183.092.5.5,0,0,0,.328-.145A5.9,5.9,0,0,0,4.559-3.3l.328.193Q3.43-.573,1.79-.573a1.391,1.391,0,0,1-1-.352A1.177,1.177,0,0,1,.42-1.817a3.311,3.311,0,0,1,.164-.907L1.925-7.335a3.983,3.983,0,0,0,.193-1,.493.493,0,0,0-.183-.376.725.725,0,0,0-.5-.164q-.145,0-.347.01l.125-.386,3.27-.531Z" transform="translate(613.453 806.659)" fill="#61c6db"/>
                    </g>
                  </svg>
                </p>
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
          <!-- Header -->
          <header>
            <img src="bg4.png" alt="" class="img-fluid" />
          </header>
          <!-- Main Content -->
          <section id="main-content" class="background-default vh-100">
            <!-- Card Input -->
            <div id="card">
              <div id="main-input" class="position-relative autocompete-nomor shadow-sm mx-3 border-radius-10 bg-white position-fixed-top min-margin-top-min-3">
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
