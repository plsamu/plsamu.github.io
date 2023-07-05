"use client";

import { useEffect } from "react";

export default function ThemeProvider({ children }: {
	children: React.ReactNode
}) {
	useEffect(() => {
		if (localStorage.theme === undefined) {
			localStorage.setItem('theme', 'dark');
		}
	}, [])
	return children;
}