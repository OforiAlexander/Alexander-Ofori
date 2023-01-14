const humburger = document.querySelector(".hanburger-btn");
const removeBtn = document.querySelector(".line");
const phone = document.querySelector(".close-btn");
humburger.addEventListener("click", () => {
    humburger.classList.add("active");
    removeBtn.classList.remove("active");
    phone.classList.remove("active");
});

phone.addEventListener("click", () => {
    humburger.classList.remove("active");
    removeBtn.classList.add("active");
    phone.classList.add("active");
})