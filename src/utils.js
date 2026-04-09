export const getImageUrl = (path) =>{
    return new URL(`./assets/${path}`, import.meta.url).href;
}

const THEME_KEY = 'dm-portfolio-theme';

export const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';

    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') return stored;

    const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
};

export const applyTheme = (theme) => {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(THEME_KEY, theme);
    }
};