//Getting html elements

const darkModeButton = document.querySelector(".dark-mode-icon");
const LightModeButton = document.querySelector(".light-mode-icon");

darkModeButton.addEventListener("click", () => {

    //Selecting whole body for dark mode

    document.body.classList.toggle("dark-mode");

});

LightModeButton.addEventListener("click", () => {

    //Removing darkmode
    
    document.body.classList.remove("dark-mode");

});
