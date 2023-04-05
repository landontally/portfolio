const navbarToggler = document.getElementById('navbar-toggler-icon');
const navbarIcon = navbarToggler.querySelector('i');

navbarToggler.addEventListener('mouseover', () => {
    if (navbarIcon.classList.contains('bi-list')) {
        navbarIcon.classList.remove('bi-list');
        navbarIcon.classList.add('bi-caret-down');
    } else if (navbarIcon.classList.contains('bi-x')) {
        navbarIcon.classList.remove('bi-x');
        navbarIcon.classList.add('bi-caret-up');
    }
});

navbarToggler.addEventListener('mouseout', () => {
    if (navbarIcon.classList.contains('bi-caret-down')) {
        navbarIcon.classList.remove('bi-caret-down');
        navbarIcon.classList.add('bi-list');
    } else if (navbarIcon.classList.contains('bi-caret-up')) {
        navbarIcon.classList.remove('bi-caret-up');
        navbarIcon.classList.add('bi-x');
    }
});

navbarToggler.addEventListener('click', () => {
    setTimeout(() => {
        if (navbarIcon.classList.contains('bi-caret-down')) {
            navbarIcon.classList.remove('bi-caret-down');
            navbarIcon.classList.add('bi-x');
        } else if (navbarIcon.classList.contains('bi-caret-up')) {
            navbarIcon.classList.remove('bi-caret-up');
            navbarIcon.classList.add('bi-list');
        }
    }, 50);
});