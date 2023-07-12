"use client";

import toogleThemeColor from "@/js/theme_changer";
import ToggleThemeChanger from "./toggle-theme-changer";

function Body({ children }: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	return (
		<body>
			<button onClick={toogleThemeColor}>Switch Theme</button>
			{children}
			<ToggleThemeChanger />
		</body>
	)
}
export default Body;