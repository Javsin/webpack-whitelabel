const html = () => {
    return (
        `<section class="background-default vh-100" id="body-content">
            <div class="pt-3">
                <div id="main-input" class="position-relative shadow-lg mx-3 border-radius-10 bg-white">
                    <div class="row px-2 py-2">
                        <div class="col-12">
                        <p class="text-secondary font-large" id="head-title"></p>
                        </div>
                        <div class="col-12 mt-2 dynamic-form" id="dynamic-form">
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasRincianPembelian" aria-labelledby="offcanvasWithBothOptionsLabel">
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
            <div class="row mx-3 mt-3">
                <div class="col-6">
                    <p class="text-secondary font-large" id="title-total">Potongan Harga</p>
                    <p class="text-dark font-large-2 text-dark" id="total-bottom">(Rp 0)</p>
                    </div>
                    <div class="col-6 align-self-center text-end" id="favorit-kode-voucher-terjadwal">
            
                    </div>
                </div>
                <div class="row mt-3 mx-3" id="setup-footer-button">
                
                </div>
            </div>
        </section>
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
        <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasPDAM" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header pb-0" style="display: block!important;">
            <div class="row">
                <div class="col-6"><p class="font-large-1 fw-bold text-dark">Pilih Wilayah</p></div>
                <div class="col-6 text-end">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="col-12">
                    <div class="header sticky-top py-2 bg-white">
                        <div class="input-group">
                            <span class="input-group-text bg-white border-end-0 py-1 px-2 border-radius-left-8 bg-white" id="labelsearch">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 48 48">
                                    <defs>
                                    <clipPath id="clip-path">
                                        <path id="Path_86" data-name="Path 86" d="M0,0H44V44H0Z" fill="#9e9e9e" clip-rule="evenodd"/>
                                    </clipPath>
                                    </defs>
                                    <g id="icon_search" transform="translate(-556 -286)">
                                    <rect id="Rectangle_1166" data-name="Rectangle 1166" width="48" height="48" transform="translate(556 286)" fill="none"/>
                                    <g id="Layer_x0020_1" transform="translate(558 288)">
                                        <g id="Group_66" data-name="Group 66" clip-path="url(#clip-path)">
                                        <g id="Group_65" data-name="Group 65" transform="translate(2.999 3.066)">
                                            <path id="Path_85" data-name="Path 85" d="M27.721,23.728l9.492,9.49v0a2.7,2.7,0,0,1,0,4.018l-.027.025A3.23,3.23,0,0,1,35.139,38a2.747,2.747,0,0,1-1.944-.759h0L23.7,27.747a15.364,15.364,0,0,1-3.909,1.934,14.617,14.617,0,0,1-4.547.732A15.145,15.145,0,1,1,30.386,15.272a14.62,14.62,0,0,1-.731,4.547,15.393,15.393,0,0,1-1.934,3.908ZM7.538,22.98a10.922,10.922,0,1,0-3.184-7.708A10.859,10.859,0,0,0,7.538,22.98Z" transform="translate(-0.106 -0.132)" fill="#bfbfbf" fill-rule="evenodd"/>
                                        </g>
                                        </g>
                                        <path id="Path_87" data-name="Path 87" d="M0,0H44V44H0Z" fill="none" fill-rule="evenodd"/>
                                    </g>
                                    </g>
                                </svg>                      
                            </span>
                            <input type="text" onkeyup="find_wilayah(this)" class="form-control border-start-0 bg-white shadow-none border-radius-right-8 font-large-1 text-secondary search" aria-label="Nominal" aria-describedby="inptNominal" autocomplete="off"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas-body mb-1 pt-0 px-0 bg-white">
            <div class="produk">
                <div class="row mx-3" id="outter-produk">
                    <!-- js -->
                </div>
            </div>
        </div>
    </div>`
    )
}

module.exports = {html}