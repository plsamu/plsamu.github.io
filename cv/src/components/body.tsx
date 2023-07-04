"use client";

import { useState } from "react";

function Body(obj: {
	children: null | React.ReactNode;
}): React.JSX.Element {
	const [theme, setTheme] = useState("light")
	const toggleTheme = () => {
		theme == 'light' ? setTheme('dark') : setTheme('light')
	}
	return (
		<body>
			<button className="switchTheme" onClick={toggleTheme}>Switch Theme</button>
			{obj.children}
		</body>
	)
}
export default Body;