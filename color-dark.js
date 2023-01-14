const navbarEl = document.querySelector(".Home-header");
const bottomContianerEl = document.querySelector("main");
const i = document.querySelector(".hanburger-btn");
const z = document.querySelector(".close-btn");
console.log(bottomContianerEl.offsetTop)
console.log(navbarEl.offsetHeight)

window.addEventListener("scroll", function() {
    if (window.scrollY > bottomContianerEl.offsetTop - navbarEl.offsetHeight) {
        navbarEl.classList.add("active")
        i.classList.add("color")
        z.classList.add("color")
    } else {
        navbarEl.classList.remove("active")
        i.classList.remove("color")
        z.classList.remove("color");
    }
})