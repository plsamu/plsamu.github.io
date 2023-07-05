export default function toogleThemeColor() {
	let localStorage = window.localStorage;
	if (localStorage.theme === undefined) {
		localStorage.setItem('theme', 'dark');
	}
	if (localStorage.theme === 'dark') {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem('theme', 'light');
	} else {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem('theme', 'dark');
	}
}