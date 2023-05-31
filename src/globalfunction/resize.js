const footermanipulation = require('./footermanipulation.js')
const myvar = require('./variable.js')
const set_heightscreen = () => {
    window.onload = function() {
        myvar.height_screen = window.innerHeight
    }
}

const set_resize = () => {
    window.addEventListener("resize", () => {
        // is focus on input
        if(document.activeElement.id != 'pin_first'){
            if(window.innerHeight >= myvar.height_screen){
                footermanipulation.add_footer()
            }else{ 
                footermanipulation.remove_footer()
            }
        }
    })
}

module.exports = {
    set_heightscreen,
    set_resize 
}
