document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Handle button active state
            filterButtons.forEach(button => {
                button.classList.remove('btn-dark');
                button.classList.add('btn-outline-dark');
            });
            this.classList.remove('btn-outline-dark');
            this.classList.add('btn-dark');

            // Handle filtering
            const filterValue = this.getAttribute('data-filter');

            filterItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('d-none');
                    item.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    item.classList.add('d-none');
                }
            });
        });
    });

    // 2. Navbar Auto-Collapse
    // Important for the fullscreen menu: Close it when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if(menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

    // 3. Dynamic Copyright Year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});