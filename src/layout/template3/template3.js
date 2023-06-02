const html = () => {
    return (
        `
        <section class="background-default vh-100" id="body-content">
            <div class="pt-3">
                <div id="main-input"class="autocompete-nomor shadow-lg mx-3 border-radius-10 bg-white">
                    <div class="row px-2 py-2">
                        <div class="col-12">
                            <p class="text-secondary font-normal" id="head-title"></p>
                        </div>
                        <div class="col-12 mt-2 dynamic-form" id="dynamic-form">

                        </div>
                    </div>
                </div>
            </div>
            <div class="produk mx-3 mt-2 h-75 pb-7" id="produk">
            <div class="row gx-2" id="outter-produk">
                <!-- js -->
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
                    <p class="font-large text-secondary pt-1">PIN Transaksi </p>
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
            <div class="offcanvas offcanvas-bottom border-radius-top-20" tabindex="-1" id="offcanvasketerangan" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <p class="font-large-1 text-dark fw-bold title-multitrx"></p>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body pt-0">
                <p class="font-large text-secondary isi-multitrx"></p>
            </div>
        </div>
        </section>
        <section class="section-footer" id="footer">
            <div id="footer-height" class="footer bg-white fixed-bottom vw-100 border-radius-top-20 py-3 shadow-lg">
                <div class="row mx-3 mt-3">
                    <div class="col-6 px-1">
                    <p class="text-secondary font-large" id="title-total">Potongan Harga</p>
                    <p class="text-dark font-large-2 text-dark" id="total-bottom">(Rp 0)</p>
                    </div>
                    <div class="col-6 px-1 align-self-center text-end" id="favorit-kode-voucher-terjadwal">
            
                    </div>
                </div>
                <div class="row mt-3 mx-3" id="setup-footer-button">
                
                </div>
            </div>
        </section>
        `
    )
}

module.exports = {html}