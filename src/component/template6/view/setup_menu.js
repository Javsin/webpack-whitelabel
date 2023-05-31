const global = require("../../../layout/template6/global.js");

const setup_menu = () => {
  const {
    rawData: { produk },
    layoutNominal,
  } = global;

  layoutNominal.innerHTML = "";
  let allOperator = [];

  produk.map((item) => {
    const { for_filteroperator, icon } = item;
    const collateData = {
      for_filteroperator,
      icon,
    };
    allOperator.push(collateData);
  });

  const columnWidth = 12 / 2;
  allOperator.map((operator) => {
    const { for_filteroperator, icon } = operator;
    const image = `<img src="${icon}" alt="${for_filteroperator}" class="img-fluid" loading="lazy">`;
    const selectOperator = `
      <div class="col-${columnWidth} mb-3" onclick="onClickMenu('${for_filteroperator}')">
        <div class="h-100 border border-white bg-white border-radius-8 mx-0 box-harga"> 
            <div class="row gx-0">
                <div class="col-12 p-2">
                    ${image}
                </div>
            </div>
        </div>
      </div>
    `;
    layoutNominal.innerHTML += selectOperator;
  });
};

module.exports = {
  setup_menu,
};
