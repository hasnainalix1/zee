document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    toggleButton.addEventListener('click', function() {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';

        // Custom behavior when toggling
        if (isExpanded) {
            // Add custom behavior when collapsing
            console.log('Navbar is collapsing');
            navbarCollapse.classList.remove('show'); // Ensure 'show' class is removed
        } else {
            // Add custom behavior when expanding
            console.log('Navbar is expanding');
            navbarCollapse.classList.add('show'); // Ensure 'show' class is added
        }
    });
});
