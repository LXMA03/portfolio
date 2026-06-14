import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    {/** Create a state for dark mode, start in light mode */}
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false)
        }
    }, [])

    const toggleTheme = () => {
        {/** Function to check which mode */}
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); {/** Theme setting stays same after refreshing */}
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors durtion-300",
            "focus:outlin-hidden"
        )}
        > 
        {" "}
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/>
        ) : ( 
            <Moon className="h-6 w-6 text-yellow-300"/> 
        )}
        </button> 
    )
}