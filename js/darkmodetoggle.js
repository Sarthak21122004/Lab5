document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        toggle.checked = true;
    }

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