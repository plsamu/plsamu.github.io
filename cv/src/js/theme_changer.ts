export function setThemeDark() {
	document.documentElement.setAttribute("data-theme", "dark");
	window.localStorage.setItem('theme', 'dark');
}

export function setThemeLight() {
	document.documentElement.setAttribute("data-theme", "light");
	window.localStorage.setItem('theme', 'light');
}

export function setThemeByCookies() {
	let theme = window.localStorage.theme
	theme === undefined || theme === 'dark' ? setThemeDark() : setThemeLight()
}
