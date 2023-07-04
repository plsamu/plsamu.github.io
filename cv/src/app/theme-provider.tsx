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
	}, [])

	return (
		<ThemeContext.Provider value="dark">
			{children}
		</ThemeContext.Provider>
	);
}