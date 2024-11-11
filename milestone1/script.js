// Pehle button aur skills section ko DOM se get karte hain
var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.querySelector(".skills");
// Button ke click par event listener add karte hain
toggleButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
