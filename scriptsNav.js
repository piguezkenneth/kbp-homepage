// Select elements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.nav-item.dropdown');
const navLinks = document.querySelectorAll('.navbar-nav .nav-item');

// Check if elements exist before adding event listeners
if (burger && nav) {
    // Toggle navigation menu
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
        burger.setAttribute('aria-expanded', !expanded);
    });
}

// Dropdown menu animation and functionality
dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = dropdownMenu.classList.contains('show');

        // Hide all other dropdowns
        dropdowns.forEach(item => {
            const menu = item.querySelector('.dropdown-menu');
            if (menu !== dropdownMenu && menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        });

        // Toggle current dropdown
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking dropdown links
    const dropdownLinks = dropdown.querySelectorAll('.dropdown-item');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    });
});

// Close dropdowns on hover outside
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (!dropdown.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

// Close dropdowns on ESC key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        });
    }
});

// Submit search form
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log('Performing search for: ', searchInput.value);
            // Add your search functionality here
        }
    });
}

