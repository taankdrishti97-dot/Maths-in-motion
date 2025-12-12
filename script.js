// script.js (Enhanced) - REPLACE EXISTING CONTENT WITH THIS
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // --- 1. DARK MODE LOGIC ---
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDark ? '☀️ Day Mode' : '🌙 Sepia Mode';
        localStorage.setItem('darkMode', isDark);
    };

    if (darkModeToggle) {
        // Check for saved preference on load
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Day Mode';
        }
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // --- 2. FORMULA TOGGLE LOGIC ---
    const formulaToggles = document.querySelectorAll('.show-formula-toggle');
    formulaToggles.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.classList.toggle('visible');
                // Update button text for better UX
                if (targetElement.classList.contains('visible')) {
                    button.textContent = 'Hide Formula / Definition';
                } else {
                    button.textContent = 'Show Formula / Definition';
                }
            }
        });
    });

    // --- 3. EXPLAIN LIKE I'M DRISHTI / MAKE IT REAL LOGIC (Placeholders) ---
    const mangoToggle = document.getElementById('mango-toggle');
    
    if (mangoToggle) {
        mangoToggle.addEventListener('click', () => {
            alert("✨ 'Explain Like I'm mango' feature is now active! The magic metaphors will appear below the concepts.");
            // In a full implementation, this would dynamically insert new, metaphor-rich text sections.
        });
    }

    const makeItRealToggles = document.querySelectorAll('.make-it-real-toggle');
    makeItRealToggles.forEach(button => {
        button.addEventListener('click', () => {
            const formula = button.getAttribute('data-formula');
            alert(`⭐ Making '${formula}' Real:\n\nIf Prime Factorization is the DNA of a number, then the number of times you can divide a cake equally among friends determines if the crumbs (decimal) ever truly end!`);
        });
    });
});
