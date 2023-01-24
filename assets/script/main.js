






const close = document.querySelector(`.close`).childNodes[0];
const mobileMenu = document.querySelector(`.mobile-menu`);
const mobileMenuBack= document.querySelector(".mobile-menu-back");
const menu = document.querySelector(`.menu`).firstChild;

const main = document.querySelector(`main`);

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

    if(window.innerWidth > 950){
        mobileMenu.style.left = "-70%"
        mobileMenu.style.transition = "0s"
        mobileMenuBack.style.display = "none"
    }
}




mobileMenu.addEventListener(`click`, e => {
    console.log(e.target.tagName)
    if((e.target.tagName == "A")&&(!e.target.hasAttribute("target"))){
        mobileMenu.style.left = "-70%"
        mobileMenu.style.transition = "0.2s"
        mobileMenuBack.style.display = "none"
        
    }
    
})




// main


// section background color



for(element of main.children)
 {
    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;   
    element.children[1].style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;  
}




