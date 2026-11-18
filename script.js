//Checks the saved dark mode preference and applies it when a page loads
function loadDarkMode() {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

//Turn dark mode on or off and save the setting
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    //Save the current dark mode preference
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    );
}

//Load the saved setting whenever a page opens
loadDarkMode();