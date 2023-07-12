"use client";

import toogleThemeColor from "@/js/theme_changer";
import ToggleThemeChanger from "./toggle-theme-changer";

function Body({ children }: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	return (
		<body>
			<ToggleThemeChanger />
			<button onClick={toogleThemeColor}>Switch Theme</button>
			{children}
		</body>
	)
}
export default Body;