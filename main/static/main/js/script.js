document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    const isNavDark = localStorage.getItem("navDarkEnabled") === "true";
    const navElement = document.querySelector('.nav');
    const elementsToColor = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const originalColors = {}; // Object to store original colors

    // Function to store original text colors of paragraphs and headings
    function storeOriginalColors() {
        elementsToColor.forEach(element => {
            originalColors[element.tagName + '-' + element.className] = window.getComputedStyle(element).color;
        });
    }

    // Function to apply dark mode and navdark mode
    function applyDarkMode() {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");

        // Toggle navdark class only if dark mode is enabled
        if (darkModeEnabled) {
            navElement.classList.add("navdark");
        } else {
            navElement.classList.remove("navdark");
        }

        // Change text color based on mode
        elementsToColor.forEach(element => {
            if (darkModeEnabled || isNavDark) {
                element.style.color = '#fff'; // Change text color to white
            } else {
                element.style.color = originalColors[element.tagName + '-' + element.className]; // Restore original color
            }
        });

        // Update local storage
        localStorage.setItem("navDarkEnabled", darkModeEnabled && isNavDark);
        localStorage.setItem("darkModeEnabled", darkModeEnabled);
    }

    // Apply stored preferences
    if (isDarkMode) {
        applyDarkMode();
        darkModeToggle.checked = true; // Set the checkbox to checked
    } else {
        // If dark mode is disabled, remove navdark class
        navElement.classList.remove("navdark");
    }

    // Store original colors initially
    storeOriginalColors();

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener("click", function() {
        applyDarkMode();
    });
});
