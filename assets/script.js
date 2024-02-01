document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const themeStylesheet = document.getElementById('themeStylesheet');

    // Проверяем предыдущее состояние темы из localStorage
    if (localStorage.getItem('theme') === 'dark') {
        themeToggle.checked = true;
        themeStylesheet.href = 'assets/style_dark.css';
    }

    // Обработчик события для переключения темы
    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            themeStylesheet.href = 'assets/style_dark.css';
            localStorage.setItem('theme', 'dark');
        } else {
            themeStylesheet.href = 'assets/style_light.css';
            localStorage.setItem('theme', 'light');
        }
    });
});
