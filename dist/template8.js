/*! For license information please see template8.js.LICENSE.txt */
(function(){var __webpack_modules__={"./src/component/template8/function/injectAndroid.js":function(module,__unused_webpack_exports,__webpack_require__){eval('const global = __webpack_require__(/*! ../../../layout/template8/global */ "./src/layout/template8/global.js")\r\nwindow.nextevent = () => {\r\n    const radio = document.querySelector(\'input[name="flexRadioDefault"]\')\r\n    try {\r\n        if(radio.checked === true){\r\n            global.offcanvas.hide()\r\n            Android.nextevent()\r\n        }else {\r\n            Android.showDialog("Anda belum menyetujui syarat dan ketentuan");\r\n        }\r\n    } catch (error) {\r\n        \r\n    }\r\n}\r\n\r\nwindow.openWebPartner = () => {\r\n    try {\r\n        Android.openWebPartner()\r\n    } catch (error) {\r\n        \r\n    }\r\n}\r\n\r\nwindow.sharePartner = () => {\r\n    try {\r\n        Android.sharePartner()\r\n    } catch (error) {\r\n       \r\n    }\r\n}\r\n\r\nwindow.savePartner = () => {\r\n    try {\r\n        Android.savePartner()\r\n    } catch (error) {\r\n     \r\n    }\r\n}\r\n\r\nwindow.setImagepartnership = (image) => {\r\n    document.getElementById(\'imgpartnership\').src = image\r\n}\r\n\r\nmodule.exports = {\r\n    nextevent,\r\n    openWebPartner,\r\n    sharePartner,\r\n    savePartner,\r\n    setImagepartnership\r\n}\n\n//# sourceURL=webpack://webpack-landingpage/./src/component/template8/function/injectAndroid.js?')},"./src/component/template8/view/setupview.js":function(module,__unused_webpack_exports,__webpack_require__){eval("const global = __webpack_require__(/*! ../../../layout/template8/global.js */ \"./src/layout/template8/global.js\")\r\nconst setupview = (data) => {\r\n    const {is_klaim,snk,image} = data\r\n    const info = document.getElementById('text-info')\r\n    info.innerHTML = ''\r\n    if (is_klaim === false) {\r\n        global.offcanvas = new bootstrap.Offcanvas(document.getElementById('offsnk'))\r\n        info.innerHTML = snk\r\n        global.offcanvas.show()\r\n    }\r\n    document.getElementById('imgpartnership').src = image\r\n}\r\n\r\nmodule.exports = {\r\n    setupview\r\n}\n\n//# sourceURL=webpack://webpack-landingpage/./src/component/template8/view/setupview.js?")},"./src/globalfunction/get_partner.js":function(module){eval("const get_partner = () => {\r\n    let partner = ''\r\n    try {\r\n        partner = JSON.parse(Android.getPartner())\r\n        return partner\r\n    } catch (error) {\r\n        console.log(error)\r\n    }\r\n}\r\n\r\nmodule.exports = {\r\n    get_partner,\r\n}\n\n//# sourceURL=webpack://webpack-landingpage/./src/globalfunction/get_partner.js?")},"./src/layout/template8/global.js":function(module){eval("let data_partner = '' \r\nlet offcanvas = ''\r\nmodule.exports = {\r\n    data_partner,\r\n    offcanvas,\r\n}\n\n//# sourceURL=webpack://webpack-landingpage/./src/layout/template8/global.js?")},"./src/layout/template8/template8.js":function(module){eval('const html = () =>{\r\n    return `\r\n        <section class="overflow-hidden vh-100" style="background-color:whitesmoke">\r\n            <div class="header">\r\n             <div class="row gx-2 ps-3 background-dark-blue" style="height: 60px" id="layout-navigation">\r\n                <div class="col-1 d-flex align-items-center">\r\n                    <a href="com.app.murapay://home" class="text-decoration-none">\r\n                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 30.63">\r\n                            <g id="Group_1003" data-name="Group 1003" transform="translate(-77 -89)">\r\n                            <g id="Layer_x0020_1" transform="translate(77 89)">\r\n                                <path id="Path_24" data-name="Path 24" d="M18.013,27.055l-7.417-7.6-.877-.9-.877-.9H36V12.97H8.843l.877-.9.877-.9,7.415-7.6.3-.3-.3-.3L15.261.3l-.3-.3-.3.3L.313,15.006,0,15.327l.132.115.014.013.031.029.017.017.12.123,14.348,14.7.3.3.3-.3,2.744-2.678.3-.3Z" fill="#f37021" fill-rule="evenodd"/>\r\n                            </g>\r\n                            </g>\r\n                        </svg>\r\n                    </a>\r\n                </div>\r\n                <div class="col-11 d-flex align-items-center">\r\n                    <p class="w-100 text-white fs-5 fw-normal">Partnership</p>\r\n                </div>\r\n             </div>\r\n            </div>\r\n            <div class="image container px-4 py-3">\r\n                <img src="http://murapay.id/app/image/produk/drawable-xhdpi/partnership_flyer_qrcode_partnership_bmandiri.png" class="img-fluid" id="imgpartnership"/>\r\n            </div>\r\n            <div class="footer position-fixed bottom-0 border-radius-top-20 shadow py-2 w-100 bg-white">\r\n                <div class="row mx-3">\r\n                    <div class="col-4 text-center">\r\n                        <div onclick="openWebPartner()">\r\n                            <img src="https://murapay.id/app/image/addon/drawable-hdpi/icon_buka_web.png" class="img-fluid" height="60" width="40">\r\n                            <div>\r\n                                <p class="text-center">Buka Web</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-4 text-center">\r\n                        <div onclick="sharePartner()">\r\n                            <img src="https://murapay.id/app/image/addon/drawable-hdpi/icon_bagikan.png"  class="img-fluid" height="40" width="40">\r\n                            <div>\r\n                                <p class="text-center">Bagikan</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="col-4 text-center">\r\n                        <div onclick="savePartner()">\r\n                            <img src="https://murapay.id/app/image/addon/drawable-hdpi/icon_simpan.png" class="img-fluid" height="40" width="40">\r\n                            <div>\r\n                                <p class="text-center">Simpan</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="offcanvas offcanvas-bottom border-radius-top-20 h-auto mh-100" tabindex="-1" id="offsnk" aria-labelledby="offcanvasBottomLabel" data-bs-backdrop="false">\r\n                <div class="offcanvas-header pb-0">\r\n                    <h5 class="offcanvas-title fs-6" id="offcanvasBottomLabel">Syarat & Ketentuan</h5>\r\n                </div>\r\n                <div class="offcanvas-body">\r\n                    <div id="text-info">\r\n                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n\r\n                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\r\n                    </div>\r\n                    <div class="my-3">\r\n                        <div class="form-check">\r\n                            <input class="form-check-input custom-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">\r\n                            <label class="form-check-label" for="flexRadioDefault1">Saya menyetujui</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class="row">\r\n                        <div class="col-6">\r\n                            <a href="com.app.murapay://home" class="btn border-dark-blue border-radius-10 text-dark w-100" type="button" aria-label="Close">Batal</a>\r\n                        </div>\r\n                        <div class="col-6">\r\n                            <button class="btn background-dark-blue border-radius-10 text-dark w-100 border-dark-blue text-white" type="button" onclick="nextevent()">Lanjut</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        <section>\r\n    `\r\n}\r\n\r\nmodule.exports = {html}\n\n//# sourceURL=webpack://webpack-landingpage/./src/layout/template8/template8.js?')},"./src/template8.js":function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){eval('const layout = __webpack_require__(/*! ./layout/template8/template8 */ "./src/layout/template8/template8.js");\r\nconst layout_1 = __webpack_require__(/*! ./component/template8/view/setupview.js */ "./src/component/template8/view/setupview.js");\r\nconst partner = __webpack_require__(/*! ./globalfunction/get_partner.js */ "./src/globalfunction/get_partner.js")\r\nconst global = __webpack_require__(/*! ./layout/template8/global.js */ "./src/layout/template8/global.js")\r\nconst injectAndroid = __webpack_require__(/*! ./component/template8/function/injectAndroid.js */ "./src/component/template8/function/injectAndroid.js")\r\nglobal.data_partner = partner.get_partner()\r\ndocument.querySelector("#main_el").innerHTML = layout.html();\r\nlayout_1.setupview(global.data_partner);\r\n\n\n//# sourceURL=webpack://webpack-landingpage/./src/template8.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}var __webpack_exports__=__webpack_require__("./src/template8.js")})();