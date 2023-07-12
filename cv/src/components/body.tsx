"use client";

import ToggleThemeChanger from "./toggle-theme-changer";

function Body({ children }: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	return (
		<body>
			<ToggleThemeChanger />
			{children}
		</body>
	)
}
export default Body;