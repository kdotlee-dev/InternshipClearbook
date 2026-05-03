import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/*export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
                'focus:outline-hidden'
            )}
        >
            {isDarkMode ? (
                <Sun className='h-6 w-6 text-yellow-300' />
            ) : (
                <Moon className='h-6 w-6 text-blue-900' />
            )}
        </button>
    );
}; */

export const ThemeToggle = ({ variant = 'dropdown', onSelect }) => {
    const [theme, setTheme] = useState('light');
    const [isOpen, setIsOpen] = useState(false);

    const applyTheme = (next) => {
        const isDark = next === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', next);
        setTheme(next);
        onSelect?.(next);
    };

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(stored || (prefersDark ? 'dark' : 'light'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (variant === 'buttons') {
        // Inline pill buttons (useful for mobile overlay)
        return (
            <div className='flex gap-3'>
                {['light', 'dark'].map((mode) => (
                    <button
                        key={mode}
                        onClick={() => applyTheme(mode)}
                        className={cn(
                            'px-4 py-2 rounded-full border border-border text-sm capitalize transition-colors',
                            theme === mode
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'text-foreground/80 hover:bg-foreground/10'
                        )}
                    >
                        {mode}
                    </button>
                ))}
            </div>
        );
    }

    // Default dropdown variant
    return (
        <div className='relative'>
            <button
                onClick={() => setIsOpen((p) => !p)}
                className='flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors duration-300'
            >
                Settings {/*<ChevronDown className='h-4 w-4' />*/}
            </button>
            {isOpen && (
                <div className='absolute right-0 mt-2 w-36 rounded-md border border-border bg-card shadow-md py-2 z-50'>
                    {['light', 'dark'].map((mode) => (
                        <button
                            key={mode}
                            onClick={() => {
                                applyTheme(mode);
                                setIsOpen(false);
                            }}
                            className={cn(
                                'w-full px-3 py-2 text-left text-sm capitalize hover:bg-foreground/10 transition-colors flex items-center gap-2',
                                theme === mode ? 'text-primary' : 'text-foreground/80'
                            )}
                        >
                            {mode === 'light' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
                            {mode}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};