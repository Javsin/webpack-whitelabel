const get_partner = () => {
    let partner = ''
    try {
        partner = JSON.parse(Android.getPartner())
        return partner
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get_partner,
}