/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "animate.css"
import "font-awesome/scss/font-awesome.scss"

/*
 * Internal dependencies
 */
import "./styles/style.scss"
import clousePagePopup from "./components/clousePagePopup"
import pagePopupButtonFurther from "./components/pagePopupButtonFurther"
import buttonGoBackPopup from "./components/buttonGoBackPopup"
import cardClosing from "./components/cardClosing"
import raisingPage from "./components/raisingPage"
import pageOpenPopup from "./components/pageOpenPopup"
import form from "./components/form"
import modal from "./components/modal"

document.addEventListener('DOMContentLoaded', () => {
    form()
    clousePagePopup()
    pageOpenPopup()
    pagePopupButtonFurther()
    buttonGoBackPopup()
    raisingPage()
    cardClosing()
    modal()
})