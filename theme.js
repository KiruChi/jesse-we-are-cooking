const body = document.body;
const toggleButton = document.querySelector('.theme-toggle');
const storageKey = 'preferred-theme';

const getSavedTheme = () => {
    try {
        return localStorage.getItem(storageKey);
    } catch {
        return null;
    }
};

const saveTheme = (theme) => {
    try {
        localStorage.setItem(storageKey, theme);
    } catch {
        // Ignore storage issues silently.
    }
};

const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    body.classList.toggle('dark-theme', isDark);

    if (toggleButton) {
        toggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
        toggleButton.setAttribute('aria-pressed', String(isDark));
    }
};

const savedTheme = getSavedTheme();
const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(preferredTheme);

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const nextTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(nextTheme);
        saveTheme(nextTheme);
    });
}
