document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const isDarkMode = localStorage.getItem("darkModeEnabled") === "true";
    const isNavDark = localStorage.getItem("navDarkEnabled") === "true";
    const navElement = document.querySelector('.nav');
    const elementsToColor = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    const pageFooter = document.querySelector('.page-footer');
    const mobileIconsLinks = document.querySelectorAll('.mobileIcons a');
    const Devtools = document.querySelector(".dev-tools-item")
    const indexCards = document.querySelectorAll('.palette-card'); // Use querySelectorAll to select all cards


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
                element.style.color = '#f7f1e3'; // Change text color to white
            } else {
                element.style.color = ''; // Remove inline style
            }
        });

        // Change background color of .mobileIcons a based on mode
        mobileIconsLinks.forEach(link => {
            if (darkModeEnabled) {
                link.style.backgroundColor = '#7a4343'; // Apply dark mode background color
            } else {
                link.style.backgroundColor = '#b33939'; // Apply default background color
            }
        });

        // Change background color of page-footer based on mode
        if (darkModeEnabled) {
            pageFooter.classList.add('dark-mode');
        } else {
            pageFooter.classList.remove('dark-mode');
        }

        // Change background color of .palette-card based on mode
        indexCards.forEach(card => {
            if (darkModeEnabled) {
                card.classList.add('dark-mode');
            } else {
                card.classList.remove('dark-mode');
            }
        });
        Devtools.forEach(card => {
            if (darkModeEnabled) {
                card.classList.add('dark-mode');
            } else {
                card.classList.remove('dark-mode');
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