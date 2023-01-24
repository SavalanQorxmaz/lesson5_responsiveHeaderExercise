






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
    if(!(e.target.hasAttribute("target"))){
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



//section aktivlesmesi ucun transition meqsedile - islemir

// console.log(main.children[0].id)
// console.log(mobileMenu.children[1].children[1].getAttribute("href").slice(1))

// mobileMenu.children[1].addEventListener("click",(e) =>{
//     console.log(e.target.getAttribute("href").slice(1))
//     let x= e.target.getAttribute("href").slice(1);
//     document.getElementById(`${x}`).style.transition = "top: 1s"
// })