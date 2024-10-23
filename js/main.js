const btnDarkMode = document.querySelector(".dark-mode-btn");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
}

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active')
    document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active")
    document.body.classList.remove("dark")
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light';
    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active")
        document.body.classList.toggle("dark")
        localStorage.setItem("darkMode", "dark")
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active')
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')
    }
})

btnDarkMode.onclick = function () {
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
        btnDarkMode.classList.add('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'light')
    }
}