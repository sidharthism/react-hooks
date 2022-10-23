import { useState } from "react";

export default function useColorScheme() {
    const [colorScheme, setColorScheme] = useState(() => {
        if (window.matchMedia)
            return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
        return "Color scheme unavailable for now!";
    });
    return colorScheme;
}