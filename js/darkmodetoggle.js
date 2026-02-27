document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Load saved theme preference (if any)
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        toggle.checked = true;
    }

    // Listen for toggle change
    toggle.addEventListener('change', function () {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});