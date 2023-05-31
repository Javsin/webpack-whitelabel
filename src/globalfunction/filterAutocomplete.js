const filter = (data,tujuan) => {
    let filter = data.filter((item,index) => {
        if (index < 3)
        return item.tujuan.startsWith(tujuan)
    })
    return filter
}
module.exports = {
    filter,
}