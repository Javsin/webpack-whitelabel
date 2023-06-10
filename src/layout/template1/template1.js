const global = require('./global.js')
const html = () => {
  const color = global.setting.color
  return (
    `<section class="background-default vh-100 overflow-scroll" id="body-content">
    <div class="mb-13">
      <div id="main-input" class="position-relative autocompete-nomor shadow mx-3 border-radius-10 bg-white mt-3">
        <div class="row px-2 py-2">
          <div class="col-12">
            <p class="text-secondary font-large" id="head-title"></p>
          </div>
          <div class="col-12 mt-2 dynamic-form" id="dynamic-form">
            
          </div>
          <div class="col-12" id="add-form">
            <div class="add-form pt-2">
              <div class="row">
                <div class="col-12 text-center">
                  <button class="btn btn-small text-white bg-transparent p-0"
                    onclick="add_form(this)"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <g id="Group_3658" data-name="Group 3658" transform="translate(-349 -598)">
                        <circle id="Ellipse_193" data-name="Ellipse 193" cx="12" cy="12" r="12" transform="translate(349 598)" fill="${color}"/>
                        <path id="Union_2" data-name="Union 2" d="M-8574.5,1437.5v-4h-4a1.5,1.5,0,0,1-1.5-1.5,1.5,1.5,0,0,1,1.5-1.5h4v-4a1.5,1.5,0,0,1,1.5-1.5,1.5,1.5,0,0,1,1.5,1.5v4h4a1.5,1.5,0,0,1,1.5,1.5,1.5,1.5,0,0,1-1.5,1.5h-4v4a1.5,1.5,0,0,1-1.5,1.5A1.5,1.5,0,0,1-8574.5,1437.5Z" transform="translate(8934 -822)" fill="#fff"/>
                      </g>
                    </svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-3 border-radius-10 mt-2 p-2 d-none" id="main_suggest">
        <p class="my-0 font-medium text-secondary">Paling sering kamu beli</p>
          <div id="suggest" class="mt-2 row">
        </div>
      </div>
    </div>
    <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasketerangan"
      aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        <p class="font-large-1 text-dark fw-bold title-multitrx"></p>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body pt-0">
        <p class="font-large text-secondary isi-multitrx"></p>
      </div>
    </div>
    <!-- offcanvas produk-->
    <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasHarga"
      aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        <p class="font-large-1 text-dark fw-bold">Nominal</p>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body mb-5">
        <div class="produk">
          <div class="row gx-2" id="outter-produk">
            <!-- js -->
          </div>
          <div class="footer d-flex flex-row-reverse bg-transparent w-100 position-fixed bottom-0 end-0">
            <div class="px-3 py-2 text-end">
              <button id="set_nominal" class="btn border-radius-10 background-dark-blue text-white py-1 px-4-5"
                onclick="set_nominal()">
                Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- offcanvas pembelian -->
    <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasRincianPembelian"
      aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header pb-1">
        <p class="font-large-1 text-dark fw-bold" id="header_pembelian">Rincian Pembelian</p>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body background-default p-0">
        <div class="row produk px-3 bg-white">
            <div class="col-12" id="outter-check-out">
                
            </div>
        </div>
        <div class="row bg-white px-3 pb-2 mb-2" id="outter-buy">

        </div>
      </div>
      <div class="footer bottom-0 end-0">
        <div class="row bg-white footer-pin p-3">
          <div class="col-6">
            <p class="font-large text-secondary">Total Bayar</p>
            <p class="font-large-1" id="total_bayar"></p>
          </div>
          <div class="col-6 d-flex align-items-end flex-column">
            <div class="text-end">
              <button id="set_nominal" onclick="bayar()" class="btn border-radius-10 background-dark-blue text-white py-1 px-4-5">
                Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-footer" id="footer">
    <div id="footer-height" class="footer bg-white fixed-bottom vw-100 border-radius-top-20 py-3 shadow-lg">
      <!-- <div class="row mx-3" id="favorit-kode-voucher-terjadwal">
        
      </div> -->
      <div class="row mx-3">
        <div class="col-6">
          <p class="text-secondary font-large" id="total-title">Total Bayar</p>
          <p class="text-dark font-large-2 text-dark" id="total-bottom">Rp 0</p>
        </div>
        <div class="col-6 align-self-center text-end" id="favorit-kode-voucher-terjadwal">

        </div>
        <div id="view_pin_first">
          <div class="row">
            <div class="col-12 mt-1">
              <p class="font-large text-secondary">PIN Transaksi</p>
            </div>
            <div class="col-12 mb-1">
              <div class="input-group">
                <input type="password" onkeypress="return isNumber(event,this)" onkeyup="validate_pin(this)" maxlength="6" class="py-0 form-control border-end-0 border-start-0 border-top-0 border-radius-0 bg-white shadow-none font-large-1 text-secondary px-0" id="pin_first" aria-label="Nominal" inputmode="numeric">
                <span id="nominalContact" class="input-group-text bg-transparent border-0 py-1 ps-2 pe-0 text-start ms-4">
                  <div class="align-self-center">
                    <div class="material-switch pull-right">
                      <input id="switchMaterial2" name="switch-material2" type="checkbox" onclick="changepin(this)" />
                      <label for="switchMaterial2" class="background-orange"></label>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="footer_button">
          
        </div>
      </div>
    </div>
  </section>`
  )
}

module.exports = {
  html
}