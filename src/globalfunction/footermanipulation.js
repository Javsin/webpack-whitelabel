const remove_footer = () => {
    const footer = document.getElementById('footer')
    footer.classList.add('d-none')
}

const add_footer = () => {
    const footer = document.getElementById('footer')
    footer.classList.remove('d-none')
}

module.exports = {
    remove_footer,
    add_footer
}