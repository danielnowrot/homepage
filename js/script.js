{
    const butt1 = document.querySelector(".js-button");
    
    const welcome = () => {
        console.log("Cześć! To moja pierwsza strona");
    }

    let onChangeBackgroundClick = () => {
        const themeBody = document.querySelector(".js-body");
        const themeButton = document.querySelector(".js-button");
        const buttonName = document.querySelector(".js-button__name");

        themeBody.classList.toggle("body--dark");
        themeButton.classList.toggle("button--dark");

        buttonName.innerText = themeBody.classList.contains("body--dark") ?
            "Jasny" : "Ciemny";
    }

    let changeElementsTheme = () => {
        const tableThemes = document.querySelectorAll(".table__cell");
        const navElements = document.querySelectorAll(".navigation__element");
       
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
    }

    welcome();
    butt1.addEventListener("click", onChangeBackgroundClick);
    changeElementsTheme();
}