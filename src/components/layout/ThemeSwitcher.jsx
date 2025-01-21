import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../utils/themeContext';

export default function ThemeSwitcher() {
    const { isDark, setIsDark } = useTheme();

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 
                 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                 group hover:ring-2 hover:ring-primary-400 dark:hover:ring-primary-500"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" />
            )}
        </button>
    );
}