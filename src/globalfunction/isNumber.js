window.isNumber = (evt,data) => {
    let type = data.getAttribute("inputmode")
    if(type === "numeric"){
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
    }
    return true;
}

module.exports = {
    isNumber
}