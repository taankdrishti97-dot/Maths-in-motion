document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Formula Box Toggle ---
    const formulaToggles = document.querySelectorAll('.show-formula-toggle');
    
    formulaToggles.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetBox = document.getElementById(targetId);
            
            if (targetBox) {
                // Toggle visibility class
                targetBox.classList.toggle('hidden');
                
                // Change button text
                if (targetBox.classList.contains('hidden')) {
                    this.textContent = 'Show ' + this.getAttribute('data-target').replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                } else {
                    this.textContent = 'Hide Formula';
                }

                // If MathJax is present, re-render the content to ensure LaTeX displays correctly
                if (window.MathJax) {
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, targetBox]);
                }
            }
        });
    });

    // --- 2. Dark/Sepia Mode Toggle ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Load saved mode from localStorage
    if (localStorage.getItem('theme') === 'dark-mode') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        darkModeToggle.textContent = '🌙 Sepia Mode';
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            this.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light-mode');
            this.textContent = '🌙 Sepia Mode';
        }
    });

    // --- 3. Placeholder for 'Drishti' Mode Toggle ---
    const drishtiToggle = document.getElementById('drishti-toggle');
    // NOTE: Implementing the full 'Drishti' mode (which changes the explanation text)
    // would require loading two sets of text for every chapter. For now, this is a visual toggle.
    drishtiToggle.addEventListener('click', function() {
        alert("Drishti Mode Activated! (Future feature will swap technical text for simpler narrative.)");
    });
    
    // --- 4. Placeholder for 'Make it Real' (Animation/Interactive Feature) ---
    // This is where you would call your P5.js or GSAP initialization functions.
    const makeItRealToggles = document.querySelectorAll('.make-it-real-toggle');
    makeItRealToggles.forEach(button => {
        button.addEventListener('click', function() {
            const concept = this.getAttribute('data-formula');
            alert(`Initiating "Visual Maths" animation for: ${concept}. (Requires P5.js/GSAP implementation)`);
            
            // FUTURE IMPLEMENTATION IDEA:
            // 1. Find the concept-section ancestor.
            // 2. Insert a new <div id="p5-canvas-for-concept"></div>
            // 3. Call your P5.js setup function for that concept (e.g., initP5ForQuadratic()).
        });
    });


    // --- 5. INITIALIZE MATHJAX (Ensures formulas render on load) ---
    // Note: MathJax is asynchronous and should already run if linked in the <head>.
    // This is a safety measure.
    if (window.MathJax) {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }

});
