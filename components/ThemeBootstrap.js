"use client";

import { useLayoutEffect } from 'react';

export default function ThemeBootstrap() {
    useLayoutEffect(() => {
        try {
            const storedTheme = localStorage.getItem('theme');
            document.documentElement.classList.toggle('light', storedTheme === 'light');
        } catch {
            // Ignore storage access errors and fall back to the default dark theme.
        }
    }, []);

    return null;
}