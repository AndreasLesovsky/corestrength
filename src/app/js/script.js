const themeToggler = document.getElementById('theme-toggler');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const themeText = document.getElementById('theme-text');
const htmlElement = document.documentElement;

// Funktion zum Setzen des Modus
function setTheme(theme) {
    // Setze das data-bs-theme Attribut
    htmlElement.setAttribute('data-bs-theme', theme);

    // Icons und Text aktualisieren
    if (theme === 'dark') {
        sunIcon.classList.add('visually-hidden');
        moonIcon.classList.remove('visually-hidden');
        themeText.textContent = 'Wechseln zu Light Mode';
    } else {
        sunIcon.classList.remove('visually-hidden');
        moonIcon.classList.add('visually-hidden');
        themeText.textContent = 'Wechseln zu Dark Mode';
    }

    // Speichern des aktuellen Themas im localStorage
    localStorage.setItem('theme', theme);
}

// Überprüfen, ob der Benutzer eine bevorzugte Einstellung hat
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    // Wenn im localStorage ein Thema gespeichert ist, setze dieses
    setTheme(storedTheme);
} else {
    // Wenn im localStorage kein Thema gespeichert ist, prüfe die Media-Query des Systems
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Event Listener für den Button zum Umschalten des Modus
themeToggler.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');

    // Umschalten zwischen Light und Dark Mode
    if (currentTheme === 'light') {
        setTheme('dark'); // Wechsel zu Dark Mode
    } else {
        setTheme('light'); // Wechsel zu Light Mode
    }
});