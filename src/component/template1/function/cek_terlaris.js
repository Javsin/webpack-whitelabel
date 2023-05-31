const global = require('../../../layout/template1/global.js')
const find_terlaris = (inp,funct) => {
    let terlaris = []
    if(funct === 'recursive'){
      let filter_hlr = global.data_terlaris.map(data => {
        data.hlr.split(",").map(findhlr => {
          if(inp === findhlr){
            terlaris.push(data)
          }
        })
     })
    }else{
      let filter_terlaris = global.data_terlaris.map(data => {
        data.hlr.split(",").map(findhlr => {
          let x = inp.includes(findhlr)
          if(x === true){
            terlaris.push(data)
          }
        })
      })
    }
    return terlaris
}

module.exports = {find_terlaris}