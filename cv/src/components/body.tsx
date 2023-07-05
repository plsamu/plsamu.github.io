"use client";

import toogleThemeColor from "@/js/theme_changer";

function Body({ children }: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	return (
		<body>
			<button className="switchTheme" onClick={toogleThemeColor}>Switch Theme</button>
			{children}
		</body>
	)
}
export default Body;