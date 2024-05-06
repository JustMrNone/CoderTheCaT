document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    const isNavDark = localStorage.getItem("navDarkEnabled") === "true";

    // Apply dark mode if the preference is stored
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }

    // Apply navdark mode if the preference is stored
    if (isNavDark) {
        document.querySelector('.nav').classList.add("navdark");
    }

    // Toggle dark mode and navdark mode, and store preferences
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.querySelector('.nav').classList.toggle("navdark"); // Toggle navdark at the same time
        const darkModeEnabled = document.body.classList.contains("dark-mode");
        const navDarkEnabled = document.querySelector('.nav').classList.contains("navdark");
        localStorage.setItem("darkModeEnabled", darkModeEnabled);
        localStorage.setItem("navDarkEnabled", navDarkEnabled);
    });
});


