






const close = document.querySelector(`.close`).childNodes[0];
const mobileMenu = document.querySelector(`.mobile-menu`);
const mobileMenuBack= document.querySelector(".mobile-menu-back");
const menu = document.querySelector(`.menu`).firstChild;


menu.addEventListener(`click`, () => {
    mobileMenu.style.left = "0"
    mobileMenu.style.transition = "1s"
    mobileMenuBack.style.display = "block"
})




close.onclick = () => {
        mobileMenu.style.left = "-70%"
    mobileMenu.style.transition = "1s"
    mobileMenuBack.style.display = "none"
}




mobileMenuBack.onclick = close.onclick;


window.onresize = () => {

    if(window.innerWidth >950){
        mobileMenu.style.left = "-70%"
        mobileMenu.style.transition = "0s"
        mobileMenuBack.style.display = "none"
    }
}