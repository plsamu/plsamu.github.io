"use client";

import { setThemeByCookies } from "@/js/theme_changer";
import { useEffect } from "react";

export default function ThemeProvider({ children }: {
	children: React.ReactNode
}) {
	useEffect(() => {
		setThemeByCookies()
	}, [])
	return children;
}