// Pehle button aur skills section ko DOM se get karte hain
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.querySelector(".skills") as HTMLElement;

// Button ke click par event listener add karte hain
toggleButton.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
});
