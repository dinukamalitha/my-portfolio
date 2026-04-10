export const getImageUrl = (path) =>{
    return new URL(`./assets/${path}`, import.meta.url).href;
}

const THEME_KEY = 'dm-portfolio-theme';

export const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'dark';

    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    // Default to dark theme regardless of OS preference
    return 'dark';
};

export const applyTheme = (theme) => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(THEME_KEY, theme);
    }
};