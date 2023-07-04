"use client";

import { createContext, useEffect } from "react";

export const ThemeContext = createContext("");

export default function ThemeProvider({ children }: {
	children: React.ReactNode
}) {

	useEffect(() => {
		// setLoading(true)
		if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
			console.log('🎉 Dark mode is supported');
			const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			darkModeMediaQuery.addEventListener('change', (e) => {
				const darkModeOn = e.matches;
				console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
			});
		}
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			console.log("add dark")
			document.documentElement.classList.add('dark')
		} else {
			console.log("remove dark")
			document.documentElement.classList.remove('dark')
		}
	}, [])

	return children;
}