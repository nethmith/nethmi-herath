import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="sm"
                className="h-9 w-9 px-0 rounded-full"
            >
                <div className="h-4 w-4" />
            </Button>
        );
    }

    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="h-9 w-9 px-0 relative overflow-hidden rounded-full hover:bg-slate-800/10 dark:hover:bg-slate-200/10 transition-all duration-300 group"
        >
            <div className="relative w-4 h-4">
                <Sun
                    className={`absolute inset-0 h-4 w-4 text-amber-500 transition-all duration-500 ${isDark
                            ? 'rotate-90 scale-0 opacity-0'
                            : 'rotate-0 scale-100 opacity-100'
                        }`}
                />
                <Moon
                    className={`absolute inset-0 h-4 w-4 text-blue-500 transition-all duration-500 ${isDark
                            ? 'rotate-0 scale-100 opacity-100'
                            : '-rotate-90 scale-0 opacity-0'
                        }`}
                />
            </div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeToggle;
