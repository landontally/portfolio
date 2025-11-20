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
                    // Add a tiny fade-in animation via class
                    item.classList.add('animate__animated', 'animate__fadeIn');
                } else {
                    item.classList.add('d-none');
                }
            });
        });
    });

    // 2. Navbar Auto-Collapse on Mobile Click
    // When you click a link on mobile, the menu should close automatically
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
});