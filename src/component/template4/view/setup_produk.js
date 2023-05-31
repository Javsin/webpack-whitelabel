const global = require("../../../layout/template4/global.js");
const renderProduk = (data) => {
        const layoutNominal = document.querySelector("#layout-nominal");
        const {detail} = data;
        const detailGrid = global.data_config.grid 
        let columnWidth = 12 / detailGrid;
        let padding = ''
        detail.map((item,index) => {
        const { tag, kode, produk, exp, harga } = item;
        // const colorTag = tag.includes("Promo") ? "green" : "gray";
        // const finalTag = tag.includes("Promo") ? "Promo" : "Regular";
        // const finalExp = exp.replace("+", "").toUpperCase();
        if(detailGrid === 2){
            let mod = (index % 2 !== 0) ? padding = "pe-0" : padding = "ps-0";
        }else{
            padding = "px-0";
        }
        let card = `
            <div class="col-${columnWidth} mb-3 ${padding}" onclick="onClickProduk(this)">
                <div class="h-100 border border-white bg-white border-radius-8 mx-0 box-harga"> 
                    <div class="row gx-0">
                        <div class="col-12 py-2">
                            <p class="font-large-1 fw-bold text-dark ms-2 produk" data-produk="${produk}">${formatRupiah(produk)}</p>
                            <p class="text-orange font-large kode_produk d-none" data-kode="${kode}">${kode}</p>
                            <p class="text-orange font-large price d-none" data-price="${harga}">${harga}</p>
                            <p class="text-orange font-large exp d-none" data-exp="${exp}">${exp}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        layoutNominal.innerHTML += card;
    });
};

module.exports = {renderProduk};
  