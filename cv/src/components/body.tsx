"use client";

import toogleThemeColor from "@/js/theme_changer";

function Body({ children }: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	const toggleTheme = () => {
		toogleThemeColor()
		console.log("body theme check: ", localStorage.getItem("theme"))
	}
	return (
		<body>
			<button className="switchTheme" onClick={toggleTheme}>Switch Theme</button>
			{children}
		</body>
	)
}
export default Body;