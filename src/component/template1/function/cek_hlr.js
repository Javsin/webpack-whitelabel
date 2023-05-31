const global = require('../../../layout/template1/global.js')
const cek_hlr = (inp,funct) => {
    const data_peroperator = global.data_produk
    let hlr = []
    if (funct === 'change'){
      let filter_hlr = data_peroperator.map(data => {
          data.hlr.split(",").map(findhlr => {
            let x = inp.includes(findhlr)
            if(x === true){
                hlr.push(data)
            }
          })
      })
    }else{
      let filter_hlr = data_peroperator.map(data => {
          data.hlr.split(",").map(findhlr => {
            if(inp === findhlr){
              hlr.push(data)
            }
          })
      })
    }
    return hlr 
}

module.exports = {
    cek_hlr
}