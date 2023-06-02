window.scrollbottom = (e) => {
    setTimeout(() => {
        const position = e.getBoundingClientRect().y
        const find_delete = e.parentNode.parentNode.parentNode.querySelector('.delete-dynamic')  
        const screen_withkeyboard = window.innerHeight - document.getElementById('footer-height').offsetHeight - e.getBoundingClientRect().height
        if(position > screen_withkeyboard){ 
        find_delete.scrollIntoView({ behavior: 'smooth' })
        }
    }, 300);
}