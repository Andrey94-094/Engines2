export default (() => {
    setTimeout(function() {
        screen.width > 500 ? (document.getElementsByClassName("modal__overlay")[0].style.display = "block") : (document.getElementsByClassName("modal__overlay")[0].style.display = "none")
    }, 5000)
})