const html = () =>{
    return `
        <section class="overflow-hidden vh-100" style="background-color:whitesmoke">
            <div class="header">
             <div class="row gx-2 ps-3 background-dark-blue" style="height: 60px" id="layout-navigation">
                <div class="col-1 d-flex align-items-center">
                    <a href="com.app.murapay://home" class="text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 30.63">
                            <g id="Group_1003" data-name="Group 1003" transform="translate(-77 -89)">
                            <g id="Layer_x0020_1" transform="translate(77 89)">
                                <path id="Path_24" data-name="Path 24" d="M18.013,27.055l-7.417-7.6-.877-.9-.877-.9H36V12.97H8.843l.877-.9.877-.9,7.415-7.6.3-.3-.3-.3L15.261.3l-.3-.3-.3.3L.313,15.006,0,15.327l.132.115.014.013.031.029.017.017.12.123,14.348,14.7.3.3.3-.3,2.744-2.678.3-.3Z" fill="#f37021" fill-rule="evenodd"/>
                            </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="col-11 d-flex align-items-center">
                    <p class="w-100 text-white fs-5 fw-normal">Partnership</p>
                </div>
             </div>
            </div>
            <div class="image container px-4 py-3">
                <img src="http://murapay.id/app/image/produk/drawable-xhdpi/partnership_flyer_qrcode_partnership_bmandiri.png" class="img-fluid" id="imgpartnership"/>
            </div>
            <div class="footer position-fixed bottom-0 border-radius-top-20 shadow py-2 w-100 bg-white">
                <div class="row mx-3">
                    <div class="col-4 text-center">
                        <div onclick="openWebPartner()">
                            <img src="https://murapay.id/app/image/addon/drawable-hdpi/icon_buka_web.png" class="img-fluid" height="60" width="40">
                            <div>
                                <p class="text-center">Buka Web</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div onclick="sharePartner()">
                            <img src="https://murapay.id/app/image/addon/drawable-hdpi/icon_bagikan.png"  class="img-fluid" height="40" width="40">
                            <div>
                                <p class="text-center">Bagikan</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 text-center">
                        <div onclick="savePartner()">
                            <img src="https://murapay.id/app/image/addon/drawable-hdpi/icon_simpan.png" class="img-fluid" height="40" width="40">
                            <div>
                                <p class="text-center">Simpan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-bottom border-radius-top-20 h-auto mh-100" tabindex="-1" id="offsnk" aria-labelledby="offcanvasBottomLabel" data-bs-backdrop="false">
                <div class="offcanvas-header pb-0">
                    <h5 class="offcanvas-title fs-6" id="offcanvasBottomLabel">Syarat & Ketentuan</h5>
                </div>
                <div class="offcanvas-body">
                    <div id="text-info">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </div>
                    <div class="my-3">
                        <div class="form-check">
                            <input class="form-check-input custom-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                            <label class="form-check-label" for="flexRadioDefault1">Saya menyetujui</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <a href="com.app.murapay://home" class="btn border-dark-blue border-radius-10 text-dark w-100" type="button" aria-label="Close">Batal</a>
                        </div>
                        <div class="col-6">
                            <button class="btn background-dark-blue border-radius-10 text-dark w-100 border-dark-blue text-white" type="button" onclick="nextevent()">Lanjut</button>
                        </div>
                    </div>
                </div>
            </div>
        <section>
    `
}

module.exports = {html}