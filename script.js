// script.js (Dark Mode Toggle Logic)

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Function to set the dark mode (sepia) class
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        // Update button text
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Day Mode';
        } else {
            darkModeToggle.textContent = '🌙 Sepia Mode';
        }
        // Save the user's preference (optional but recommended)
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    };

    // Check for saved preference on load
    if (localStorage.getItem('darkMode') === 'true') {
        toggleDarkMode(); // Toggle it on if the preference is saved as true
    }

    // Event listener for the button
    darkModeToggle.addEventListener('click', toggleDarkMode);
});
