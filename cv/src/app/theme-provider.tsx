"use client";

import toogleThemeColor from "@/js/theme_changer";
import { useEffect } from "react";

export default function ThemeProvider({ children }: {
	children: React.ReactNode
}) {
	useEffect(() => { toogleThemeColor() }, [])
	return children;
}