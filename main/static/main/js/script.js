document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    const isNavDark = localStorage.getItem("navDarkEnabled") === "true";
    const navElement = document.querySelector('.nav');
    const elementsToColor = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

    // Function to store original text colors of paragraphs and headings
    function storeOriginalColors() {
        elementsToColor.forEach(element => {
            element.dataset.originalColor = window.getComputedStyle(element).color;
        });
    }

    // Function to apply dark mode and navdark mode
    function applyDarkMode() {
        document.body.classList.toggle("dark-mode");
        const darkModeEnabled = document.body.classList.contains("dark-mode");

        // Always add navdark class in dark mode
        if (darkModeEnabled || isNavDark) {
            navElement.classList.add("navdark");
        } else {
            navElement.classList.remove("navdark");
        }

        // Change text color based on mode
        elementsToColor.forEach(element => {
            if (darkModeEnabled || isNavDark) {
                element.style.color = '#fff'; // Change text color to white
            } else {
                element.style.color = ''; // Remove inline style
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
    }

    // Store original colors initially
    storeOriginalColors();

    // Event listener for dark mode toggle
    darkModeToggle.addEventListener("click", function() {
        applyDarkMode();
    });
});
