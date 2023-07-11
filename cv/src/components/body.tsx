"use client";

import toogleThemeColor from "@/js/theme_changer";

function Body({ children }: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	return (
		<body>
			<div className="toggle">
				<div className="toggle-theme-value">Light</div>
				<div className="toggle-theme-value">Dark</div>
			</div>
			<button onClick={toogleThemeColor}>Switch Theme</button>
			{children}
		</body>
	)
}
export default Body;