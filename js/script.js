console.log("Cześć! To moja pierwsza strona");

let butt1 = document.querySelector(".js-button");
let themeBody = document.querySelector(".js-body");
let themeButton = document.querySelector(".js-button");
let buttonName = document.querySelector(".js-button__name");

butt1.addEventListener("click", () => {
    themeBody.classList.toggle("body--dark");
    themeButton.classList.toggle("button--dark");

    buttonName.innerText = themeBody.classList.contains("body--dark") ?
        "Jasny" : "Ciemny";
})

let tableThemes = document.querySelectorAll(".table__cell");
let navElements = document.querySelectorAll(".navigation__element");

tableThemes.forEach((tableCell) => {
    butt1.addEventListener("click", () => {
        tableCell.classList.toggle("table__cell--dark");
    })
})
navElements.forEach((navElement) => {
    butt1.addEventListener("click", () => {
        navElement.classList.toggle("navigation__element--dark");
    })
})
