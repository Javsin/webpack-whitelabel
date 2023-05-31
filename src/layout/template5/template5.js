const html = () => {
    return (
        `<section class="background-default vh-100" id="body-content">
            <div class="header">
                <img src="bg3.png" alt="" class="img-fluid">
            </div>
            <div class="">
                <div id="main-input" class="position-relative shadow-lg mx-3 border-radius-10 bg-white min-margin-top-min">
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